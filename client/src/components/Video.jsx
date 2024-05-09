import React from 'react'
import { Grid, Box, Heading } from "@chakra-ui/react"
import { SocketContext } from "../components/Context"
import { useContext } from "react"

const Video = () => {
    const { name, callAccepted, myVideoRef, userVideoRef, callEnded, stream, call } = useContext(SocketContext)
    return (
        <Grid justifyContent="center" templateColumns='repeat(2, 1fr)' mt="12">
            {/* my video */}
            {
                stream && (
                    <Box>
                        <Grid colSpan={1}>
                            <Heading as="h5">
                                {name || 'Name'}
                            </Heading>
                            <video ref={myVideoRef} autoPlay muted style={{ width: '300px' }}></video>
                        </Grid>
                    </Box>
                )
            }
            {/* user's video */}
            {
                callAccepted && !callEnded && (
                    <Box>
                        <Grid colSpan={1}>
                            <Heading as="h5">
                                {call.name || 'Name'}
                            </Heading>
                            <video ref={userVideoRef} autoPlay style={{ width: '500px' }}></video>
                        </Grid>
                    </Box>
                )
            }
        </Grid>
    )
}

export default Video