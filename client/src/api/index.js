import axios from 'axios'

const url = "http://localhost:5100/posts"

//this connects client to server side posts
export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url,newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`)