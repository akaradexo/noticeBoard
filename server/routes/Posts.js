import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts); // http://localhost:5000/posts - GET
router.post('/', createPost); //http://localhost:5000/posts - POST

export default router;