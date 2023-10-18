import React from 'react'
import Post from './Post/Post'
import {useSelector} from 'react-redux' //fetch the data from the global redux store

const Posts = () => {

  const posts = useSelector((state)=>state.posts) //posts comes from reducers/index.js
  console.log(posts) //check in browser to see that empty posts is printed []

  return (
    <div>
      <h1> POSTS </h1>
      <Post />
      <Post />
    
    </div>
  )
}

export default Posts