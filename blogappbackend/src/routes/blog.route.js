import app from '../app';
import Router from 'express';
import { addBlog,deleteBlog,getBlog,updateBlog } from '../controllers/blog.controller';
import { get } from 'mongoose';

const router=Router();


router.post('/create',addBlog);

router.put('/update/:id',updateBlog);


router.delete('/delete/:id',deleteBlog);

router.get('/get',getBlog);


export default router;