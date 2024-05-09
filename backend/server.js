// const express =require('express');
// const mongoose =require('mongoose');
// const cors =require('cors');
// require ("dotenv").config();
// const cookieParser =require('cookie-parser');
// const bodyParser =require('body-parser');

// const app = express();

// // Middleware
// app.use(express.json(),express.urlencoded({extended:true}));
// app.use(cookieParser());
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect("mongodb+srv://root:root@cluster0.pwwwv65.mongodb.net/cloudNineTest?retryWrites=true&w=majority&appName=Cluster0")
//     .then(() => {
//         console.log('Connected to MongoDB test');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// const userRouter =require('./routes/user.routes.js');
// const authRoute =require('./routes/user.auth.js');
// const productRoutes =require('./routes/productRoutes.js');




// // Routes
// // const requestSchema = new mongoose.Schema({
// //     residentName: { type: String, required: true },
// //     content: { type: String, required: true },
// //     likes: { type: Number, default: 0 },
// // });

// // const Request = mongoose.model('Request', requestSchema);

// // Create a new request
// // app.post('/requests', async (req, res) => {
// //     try {
// //         const { residentName, content } = req.body;
// //         const newRequest = new Request({ residentName, content });
// //         const savedRequest = await newRequest.save();
// //         res.json(savedRequest);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });

// // Get all requests
// // app.get('/requests', async (req, res) => {
// //     try {
// //         const requests = await Request.find();
// //         res.json(requests);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });

// // // Like a request
// // app.patch('/requests/:id/like', async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const updatedRequest = await Request.findByIdAndUpdate(
// //             id,
// //             { $inc: { likes: 1 } },
// //             { new: true }
// //         );
// //         res.json(updatedRequest);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });

// // // Delete a request
// // app.delete('/requests/:id', async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         await Request.findByIdAndDelete(id);
// //         res.json({ message: 'Request deleted successfully' });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Internal Server Error' });
// //     }
// // });
// console.log("i'm seeing this");
// require("./routes/request.route")(app);

// // Routes
// app.use('/api/user', userRouter);
// app.use('/api/auth', authRoute);
// app.use('/api/products', productRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(statusCode).json({
//         success: false,
//         message,
//         statusCode: statusCode
//     });
// });

// app.listen(8000, () => {
//     console.log('Server running on port 8000');
// });

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
// import requestRoutes from './routes/request.route.js'
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

const requestSchema = new mongoose.Schema({
    residentName: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
});


const Request = mongoose.model('Request', requestSchema);

// Create a new request
app.post('/requests', async (req, res) => {
    try {
        const { residentName, content } = req.body;
        const newRequest = new Request({ residentName, content });
        const savedRequest = await newRequest.save();
        res.json(savedRequest);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// Get all requests
app.get('/requests', async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Like a request
app.patch('/requests/:id/like', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRequest = await Request.findByIdAndUpdate(
            id,
            { $inc: { likes: 1 } },
            { new: true }
        );
        res.json(updatedRequest);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a request
app.delete('/requests/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Request.findByIdAndDelete(id);
        res.json({ message: 'Request deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoutes);
// app.use('/requests', requestRoutes);

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