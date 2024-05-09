const {Request} = require('../models/request.model')


module.exports.create=(req,res)=>{
    Request.create(req.body)
    .then((obj=>res.json(obj)))
    .catch(err=> {
        res.status(400).json(err);
        console.log("controller problem");
    })
};

// GET ALL THE AUTHORS
module.exports.findALL = (req,res)=>{
    Request.find({})
    .then ((obj=>res.json(obj)))
    .catch ((err)=>res.json(err))
};