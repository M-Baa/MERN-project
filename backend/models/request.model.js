// const mongoose =require('mongoose');
import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    residentName: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number, default: 0 },
});
// module.exports.Request=mongoose.model('Request',requestSchema);
const Request = mongoose.model('Request', requestSchema);

export default Request;