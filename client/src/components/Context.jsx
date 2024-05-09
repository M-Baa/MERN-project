import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';

const SocketContext = React.createContext();
const socket = io('http://localhost:8080');

const ContextProvider = ({ children }) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState(null);
    const [name, setName] = useState('');
    const [call, setCall] = useState({});
    const [me, setMe] = useState('');
    const myVideoRef = React.useCallback(x => {
        if (x) {
            x.srcObject = stream;
        }
    }, [stream]);
    const userVideoRef = React.useCallback(node => {
        if (node) {
            node.srcObject = call.stream;
        }
    }, [call.stream]);

    useEffect(() => {
        navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
            .then(currentStream => {
                setStream(currentStream);
            })
            .catch(error => {
                console.error('Error accessing media devices:', error);
            });

        socket.on('me', id => setMe(id));
        socket.on('callUser', ({ from, name: callerName, signal }) => {
            setCall({ isReceivingCall: true, from, name: callerName, signal });
        });
    }, []);

    const answerCall = () => {
        setCallAccepted(true);
        const peer = new Peer({ initiator: false, trickle: false, stream });
        peer.on('signal', data => {
            socket.emit('answerCall', { signal: data, to: call.from });
        });
        peer.on('stream', currentStream => {
            setCall(prevState => ({ ...prevState, stream: currentStream }));
        });
        peer.signal(call.signal);
    };

    const callUser = id => {
        const peer = new Peer({ initiator: true, trickle: false, stream });
        peer.on('signal', data => {
            socket.emit('callUser', { userToCall: id, signalData: data, from: me, name });
        });
        peer.on('stream', currentStream => {
            setCall(prevState => ({ ...prevState, stream: currentStream }));
        });
        socket.on('callAccepted', signal => {
            setCallAccepted(true);
            peer.signal(signal);
        });
    };

    const leaveCall = () => {
        setCallEnded(true);
        // Close peer connections and reset state as needed
    };

    return (
        <SocketContext.Provider
            value={{
                call,
                callAccepted,
                myVideoRef,
                userVideoRef,
                stream,
                name,
                setName,
                callEnded,
                me,
                callUser,
                leaveCall,
                answerCall,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { ContextProvider, SocketContext };