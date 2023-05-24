import Router from 'express';
import app from './app.js';
import { login } from '../controllers/user.controller';
import { isLoggedIn } from '../middleware/user.middleware';
const router=Router();

router.put('/login',isLoggedIn,login);


export default router;