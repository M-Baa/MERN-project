import express from 'express'
import { test, updateUser, deleteUser, getAllUsers, deleteOneUser } from '../controller/user.controller.js'
import { verifyToken } from '../utils/verifyUser.js'


const router = express.Router()

router.get('/all', getAllUsers); // New route to fetch all users
router.get('/', test)
router.post('/update/:id', verifyToken, updateUser)
// router.delete('/delete/:id', deleteUser)
router.delete('/delete/:id', deleteOneUser)

export default router