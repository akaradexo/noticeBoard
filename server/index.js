import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://mernfullstack:mernfullstack123@cluster0.jngbl.mongodb.net/MERNFullstack?retryWrites=true&w=majority';
const PORT = 5000;

app.use('/posts', postRoutes); //http://localhost:5000/posts - CRUD - getPosts, getPost, createPost, updatePost, deletePost

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => app.listen(PORT, () => console.log(`Server is Running on Port: http://localhost:${PORT}`)))
        .catch((error) => console.log(`${error} did not connect`));