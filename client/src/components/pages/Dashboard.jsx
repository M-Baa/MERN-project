// components/pages/Dashboard.js
import Header from '../Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import  '../../assets/css/style/dashboard.css'

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const { currentUser } = useSelector((state) => state.user);
    useEffect(() => {
        // Fetch all users when the component mounts
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/user/all"); // Update the URL
                console.log("response:", response.data);
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);
    // Fetch all users when the component mounts
    const fetchUsers = async () => {
        try {
            const response = await axios.get('/api/users'); // Replace with your API endpoint
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    fetchUsers();

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/user/delete/${id}`);
            // Fetch the updated user list after successful deletion
            const response = await axios.get("http://localhost:8000/api/user/all");
            setUsers(response.data);
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (

        <div className="container-fluid">
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className="row">

                <div className="col-md-6">
                    <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <td><img src={user.profile_picture} alt={`Profile of ${user.username}`} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
