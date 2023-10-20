import React from 'react'
import Post from './Post/Post'
import {useSelector} from 'react-redux' //fetch the data from the global redux store
import  Loader  from "../Loader";

const Posts = ({setCurrentId}) => {

  const posts = useSelector((state)=>state.posts) //posts comes from reducers/index.js
  console.log(posts) //check in browser to see that empty posts is printed []

  return (

    !posts.length? <Loader /> : (
    <div>
      <div className="mt-10 grid grid-cols-2 gap-1 w-full">
      {posts.map((post)=>(
        <div key={post._id} className="grid w-full">
          <Post post={post} setCurrentId={setCurrentId}/>
        </div>
      ))}
      </div>
    </div>)
  )
}

export default Posts