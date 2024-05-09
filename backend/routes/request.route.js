// const RequestController = require('../controller/request.controller');
// module.exports=(app)=>{
//     app.get('/api/requests',RequestController.findALL);
//     app.post('/api/requests',RequestController.create);
//     // app.patch('/api/authors/:id',AuthorController.update);
//     // app.get('/api/authors/:id',AuthorController.getOne);
//     // app.delete('/api/authors/delete/:id',AuthorController.delete);

// }

import express from 'express';
import Request from '../models/request.model';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const obj = await Request.save(req.body);
        res.json(obj);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});
// Request.create(req.body)
//     .then((obj=>res.json(obj)))
//     .catch(err=> {
//         res.status(400).json(err);
//         console.log("controller problem");
//     })
export default router;
