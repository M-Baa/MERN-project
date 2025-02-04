import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const test = (req, res) => {
    res.json({
        message: 'User Route',
    })
}

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return res.status(401).json({ message: 'You can update only your account' })
    }
    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                profile_picture: req.body.profile_picture,
            },

        },
            { new: true }
        )
        const { password, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest });

    } catch (error) {
        return res.status(401).json({ message: 'error' })
    }
}


export const deleteUser = async (req, res, next) => {
    if (req.user.id !== req.params.id) {
        return res.status(401).json({ message: 'You can delete only your account' })
    }
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: 'User Deleted..' })
    } catch (error) {
        res.status(400).json({ message: 'Someting went wrong!!' })
    }
}

export const deleteOneUser = async (req, res) => {
    try {
        const userId = req.params.id;
        // Assuming req.user.id is available after authentication


        await User.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
};
export const getAllUsers = async (req, res) => {
    try {
        console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log("yyyyyyyyyyyyyyyyyyy")

        res.status(500).json({ message: 'Failed to fetch users' });
    }
};