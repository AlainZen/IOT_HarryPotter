import express from 'express';
import { updateUser } from '../controllers/UserController.js';

const router = express.Router();


router.post('/updateUser', Update);


export default router;