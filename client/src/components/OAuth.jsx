import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from './firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from './redux/user/userSlice'
import { useNavigate } from 'react-router-dom'
import img from '../assets/image/google.jpg'


const OAuth = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)
      // console.log(result);
      const res = await fetch('http://localhost:8000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL

        })
      })
      const data = await res.json()
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      console.log('Could not login with google', error);
    }
  }


  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button
        type='button'
        onClick={handleGoogleClick}
        style={{
          maxWidth: '320px',
          display: 'flex',
          padding: '0.5rem 1.4rem',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: '700',
          textAlign: 'center',
          textTransform: 'uppercase',
          verticalAlign: 'middle',
          alignItems: 'center',
          borderRadius: '0.5rem',
          border: '1px solid rgba(0, 0, 0, 0.25)',
          gap: '0.75rem',
          color: 'rgb(65, 63, 63)',
          backgroundColor: '#fff',
          cursor: 'pointer',
          transition: 'all .6s ease'
        }}
      >
        <img src={img} alt="Google" style={{ height: '20px', width: '20px' }} />
        Continue with Google
      </button>
    </div>

  )
}

export default OAuth