import express from 'express'
import {getPosts,createPost,updatePost,deletePost} from '../controllers/posts.js' //remember to add .js - in react we dont need. in express we need

const router = express.Router();

//call back function that is executed once someone visits the route in localhost:5100
router.get('/',getPosts)
router.post('/',createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost);

export default router;