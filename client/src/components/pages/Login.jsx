import React, { useState } from 'react';
import img from '../../static/images/c9-logo.png'

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from '../OAuth';
import '../../assets/css/style/login.css'
const Login = () => {
  const [formdata, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state) => state.user.error);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      dispatch(signInStart());

      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if (res.ok) {
        dispatch(signInSuccess(data)); // Pass the user data to signInSuccess
        console.log("*****************",data);
        if (data.role === 'admin') { // Check if the user is an admin
          navigate("/dashboard"); // Redirect admin to the dashboard
        } else {
          navigate("/"); // Redirect non-admin users to the home page
        }
      } else {
        dispatch(signInFailure("Invalid credentials")); // Pass an error message
        setLoginStatus("invalidCredentials");
      }
    } catch (error) {
      console.log(error);
      dispatch(signInFailure("Login failed. Please try again later."));
      setLoginStatus("failed");
    } finally {
      setLoading(false);
    }
  };


  return (




    <div className="content">
      {/*  */} */
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="form-block">
                  <div className="mb-4">
                    <h3>Login to <strong>CloudNine</strong></h3>
                    {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group first">

                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control"
                        id="email"
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="form-group last mb-4">

                      <input placeholder="Password"
                        type="password"
                        className="form-control"
                        id="password"
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    {loginStatus === 'success' && (
                      <p className='text-green-500'>Login successful!</p>
                    )}
                    {loginStatus === 'invalidCredentials' && (
                      <p className='text-red-500'>Invalid email or password. Please try again.</p>
                    )}
                    {loginStatus === 'failed' && (
                      <p className='text-red-500'>Login failed. Please try again later.</p>
                    )}
                    <p className="login-bottom-p">
                      Already have an account? <Link to='/signup'>Login</Link>
                    </p>
                    <button type="submit" className="btn btn-pill text-white btn-block btn-primary" disabled={loading}>
                      {loading ? 'Signing In...' : 'Login'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>











  );
};

export default Login;