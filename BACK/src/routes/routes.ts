import { Router } from 'express';

const router = Router();

router.get('/api/example', (req, res) => {
    res.json({ message: 'This is an example endpoint' });
});

export default router;