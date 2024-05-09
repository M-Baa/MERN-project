// const express =require('express');
// const mongoose =require('mongoose');
// const cors =require('cors');
// require ("dotenv").config();
// const cookieParser =require('cookie-parser');
// const bodyParser =require('body-parser');

import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.routes.js'
import authRoute from './routes/user.auth.js'
import productRoutes from './routes/productRoutes.js'
import requestRoutes from './routes/request.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


const app = express();

// Middleware
app.use(express.json(),express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://root:root@cluster0.pwwwv65.mongodb.net/cloudNineTest?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB test');
    })
    .catch((err) => {
        console.log(err);
    });

// const userRouter =require('./routes/user.routes.js');
// const authRoute =require('./routes/user.auth.js');
// const productRoutes =require('./routes/productRoutes.js');

console.log("i'm seeing this");
// require("./routes/request.route")(app);

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoutes);
app.use('/requests', requestRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode: statusCode
    });
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});




// app.use(express.json())
// app.use(cookieParser())
// app.use(cors())

// mongoose.connect("mongodb+srv://koukisaif:root@cluster0.8yc94wm.mongodb.net/SATALANA?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// app.listen(8000, () => {
//     console.log('Server running on port 8000');
// })

// app.use('/api/user', userRouter)
// app.use('/api/auth', authRoute)

// app.use((err, req, res, next) => { // middleware for error handling
//     const statusCode = err.statusCode || 500
//     const message = err.message || 'Internal Server Error'
//     return res.status(statusCode).json({
//         success: false,
//         message,
//         statusCode: statusCode
//     })
// })


// pratikgauth