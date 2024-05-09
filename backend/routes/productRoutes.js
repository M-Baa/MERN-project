import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
