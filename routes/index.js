import express from 'express';

const router = express.Router();

// Root endpoint
router.get('/', (req, res) => {
    res.send({ message: 'API is running smoothly!' });
});

export default router;
