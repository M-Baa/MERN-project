import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OAuth from '../OAuth';
import backgroundImage from '../../assets/image/cloudd.jpg';
import '../../assets/css/style/signup.css';
import img from '../../static/images/c9-logo.png'



const Signup = () => {
  const [formdata, setFormdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [signupStatus, setSignupStatus] = useState(null);

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();

      if (res.ok) {
        // Successful signup
        setSignupStatus('success');
      } else {
        // Unsuccessful signup
        if (data.error === 'Email already registered') {
          setSignupStatus('emailExists');
        } else {
          setSignupStatus('failed');
        }
      }
    } catch (error) {
      console.log(error);
      setSignupStatus('failed');
    } finally {
      setLoading(false);
    }
  };

  return (


<div style={{
      backgroundImage: `url(${backgroundImage})`,
      
      height:"120rem" , backgroundSize:"cover"}}>
        {/* <nav className='navbar'>
                <div className='left'>
                    <Link to="/"><img className='logo' src={img} alt="logo" /></Link>
                </div>
                <div className='center'>
                    <Link className="links" to="/tournament"> Tournament</Link>
                    <Link className="links" to="/community"> Community</Link>
                    <Link className="links" to="/shop"> Shop</Link>

                </div>
                <div className='right'>
                    <Link className="links" to="/login">Login</Link>
                    <Link className="links" to="/signup">SignUp</Link>
                </div>
            </nav> */}
    <div className="content" >
      <div className="container">
        <div className="row justify-content-center">
        
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="form-block">
                  <div className="mb-4">
                    <h3>Sign In to <strong> CloudNine</strong></h3>
                    {/* <p className="mb-4">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p> */}
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="form-group first">
                      <input className="form-control" id='username' onChange={handleChange} type="text" placeholder="Username" name="Username" required={true} />

                    </div>
                    <div className="form-group last mb-4">
                      <input className="form-control" onChange={handleChange} id='email' type="email" placeholder="Email" name="email" required={true} />
                    </div>
                    <div className="form-group first">



                      <input
                        className="form-control"
                        type='password'
                        placeholder='Password'
                        id='password'
                        onChange={handleChange} />
                    </div>


                    <button type="submit" className="btn btn-pill text-white btn-block btn-primary">Log In</button>

                    <span className="d-block text-center my-4 text-muted"> or sign in with</span>

                    <OAuth />




                  </form>
                  {signupStatus === 'success' && (
                    <p className='text-green-500'>User added successfully!</p>
                  )}
                  {signupStatus === 'emailExists' && (
                    <p className='text-red-500'>Email already exists. Please use a different email.</p>
                  )}
                  {signupStatus === 'failed' && (
                    <p className='text-red-500'>Signup failed. Please try again later.</p>
                  )}
                  <p className="login-bottom-p">
                    Already have an account? <Link to='/login'>Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >

    </div>






    // <div className="register-main">

    //   <div className="register-right">
    //     <div className="register-right-container">
    //       <div className="register-logo">
    //         {/* <img src={Logo} alt="" /> */}
    //       </div>
    //       <div className="register-center">
    //         <h2>Welcome to our website!</h2>

    // <form onSubmit={handleSubmit}>
    // <input id='username' onChange={handleChange} type="text" placeholder="Username" name="Username" required={true} />
    //   {/* <input type="text" placeholder="Lastname" name="lastname" required={true} /> */}
    // <input onChange={handleChange} id='email' type="email" placeholder="Email" name="email" required={true} />
    //   <div className="pass-input-div">
    // <input type='password'
    //   placeholder='Password'
    //   id='password'
    //   onChange={handleChange} />

    //   </div>
    //   <div className="pass-input-div">


    //   </div>
    //   <div className="register-center-buttons">
    //     <button type="submit">Sign Up</button>
    //     <button disabled={loading} type="submit">{loading ? 'Signing Up...' : 'Sign Up'}
    //       {/* <img src={GoogleSvg} alt="" /> */}
    //       Sign Up with Google
    //       <OAuth />
    //     </button>
    //   </div>
    // </form>
    //       </div>
    // {signupStatus === 'success' && (
    //   <p className='text-green-500'>User added successfully!</p>
    // )}
    // {signupStatus === 'emailExists' && (
    //   <p className='text-red-500'>Email already exists. Please use a different email.</p>
    // )}
    // {signupStatus === 'failed' && (
    //   <p className='text-red-500'>Signup failed. Please try again later.</p>
    // )}
    // <p className="login-bottom-p">
    //   Already have an account? <Link to='/login'>Login</Link>
    // </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Signup;