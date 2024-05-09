import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDownloadURL, ref, getStorage, uploadBytesResumable } from 'firebase/storage'
import { app } from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import Header from '../Header';
import img from '../../assets/image/background.jpg'
import '../../assets/css/style/profile.css'


import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut
} from '../redux/user/userSlice'

export default function Profile() {
  const fileRef = useRef(null)
  const { currentUser, loading, error } = useSelector((state) => state.user)
  const [image, setImage] = useState(undefined)
  const [imagePercent, setImagePercent] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [formData, setFormData] = useState({})
  const [updateSuccess, setUpdateSuccess] = useState(false)
  const dispatch = useDispatch()

  console.log(formData);



  useEffect(() => {
    if (image) {
      handleFileUpload(image)
    }
  }, [image])
  const handleFileUpload = async (image) => {
    const storage = getStorage(app)
    const fileName = uuidv4();
    const storageRef = ref(storage, fileName)
    const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setImagePercent(Math.round(progress))
      },

      (error) => {
        setImageError(true)
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then
          ((downloadURL) => {
            setFormData({ ...formData, profile_picture: downloadURL })
          })
      }
    )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(updateUserStart())
      const res = await fetch(`http://localhost:8000/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(updateUserFailure(data))
      }
      dispatch(updateUserSuccess(data))
      setUpdateSuccess(true)
    } catch (error) {
      dispatch(updateUserFailure(error))
    }
  }
  const handleImageClick = () => {
    fileRef.current.click();
  };
  const handleDeleteAccount = async () => {
    try {
      dispatch(deleteUserStart())
      const res = await fetch(`http://localhost:8000/api/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.success === false) {
        dispatch(deleteUserFailure())
        return
      }
      dispatch(deleteUserSuccess())
    } catch (error) {
      dispatch(deleteUserFailure(error))
    }
  }


  const handleSignout = async () => {
    try {
      await fetch('http://localhost:8000/api/auth/signout')
      dispatch(signOut())
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <div className='profilecontainer'>
      

      <div className='p-3 d-flex justify-content-center'>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">Welcome  {currentUser.username}</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 d-flex justify-content-center">
                <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <input
                  type="file"
                  ref={fileRef}
                  className="d-none"
                  onChange={(e) => setImage(e.target.files[0])} />
                <img
                  src={formData.profile_picture || currentUser.profile_picture}
                  alt="Profile Picture"
                  className="img-fluid rounded-circle"
                  style={{ width: "100px", height: "100px", cursor: "pointer" }}
                  onClick={handleImageClick}
                />
              </div>
              <p >
                {imageError ? (
                  <span className='text-red-700'>
                    Error uploading image (file size must be less than 2 MB)
                  </span>
                ) : imagePercent > 0 && imagePercent < 100 ? (
                  <span className='text-slate-700'>{`Uploading: ${imagePercent} %`}</span>
                ) : imagePercent === 100 ? (
                  <span className='text-green-700'>Image uploaded successfully</span>
                ) : (
                  ''
                )}
              </p>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  defaultValue={currentUser.username}
                  onChange={handleChange}
                  style={{ width: "300px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  defaultValue={currentUser.email}
                  onChange={handleChange}
                  style={{ width: "300px" }}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  style={{ width: "300px" }}
                />
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  {loading ? 'Loading' : 'Update'}
                </button>
              </div>
            </form>

            <div className='d-flex justify-content-center'>
              <button type="button" onClick={handleSignout} className="btn btn-danger me-2">Sign Out</button>
              <button type="button" onClick={handleDeleteAccount} className="btn btn-danger">Delete Account</button>
            </div>

            {error && <p className='text-danger mt-3'>Something went wrong!</p>}
            {updateSuccess && <p className='text-success mt-3'>User is updated successfully!</p>}
          </div>
        </div>
      </div>
    </div>

  )
}

