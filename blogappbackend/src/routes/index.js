import Router from 'express';
import blogRouter from '../blog.route.js';

const router =Router();


router.use('/blog',blogRouter);


export default router;