import React from 'react'
import {FiThumbsUp } from "react-icons/fi";
import {RiDeleteBinLine } from "react-icons/ri";
import {FiMoreHorizontal } from "react-icons/fi";
import moment from 'moment'

import { useDispatch } from 'react-redux';
import { deletePost,likePost } from '../../../actions/posts';


const Post = ({post,setCurrentId}) => {

  const dispatch = useDispatch()

  return (
    <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between mb-3 absolute top-0 left-0 pl-3">
        <div className="justify-items-start ">
          <h5 className="mb-2 font-normal dark:text-white">
            {post.creator}
          </h5>
          </div>
          <div className="items-end">
          <p className=" inline pl-5 text-xs dark:text-white">
          {moment(post.createdAt).fromNow()}
          </p>
          </div>
        </div>
        
      <button className="absolute bottom-0 right-0 text-black bg-white p-2 rounded  hover:bg-[#2952e3] hover:text-white m-2" onClick={() =>(setCurrentId(post._id))}>
        <FiMoreHorizontal/>
        </button>
      <img className="rounded-t-lg h-100" src={post.selectedFile} title={post.title}/>
      <div className="p-5">
        <h1 className="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400">
        {post.title}
        </h1>
        <h2 className="mb-3 text-2xl font-normal text-gray-700 dark:text-gray-400">
        {post.message}
        </h2>
        <h3 className="mb-3 text-xl font-normal text-gray-700 dark:text-gray-400">
        {post.tags.map((tag) => `#${tag} `)}
        </h3>

        <div className="p-5">
        <button className="absolute bottom-0 left-0 text-black bg-white p-2 rounded  hover:bg-[#2952e3] hover:text-white m-22" onClick={()=>(dispatch(likePost(post._id)))}>
          <FiThumbsUp/>Like {post.likeCount}
        </button>
        <button className="absolute bottom-0 left-20 text-black bg-white p-2 rounded  hover:bg-[#2952e3] hover:text-white m-22 font font-normal" onClick={()=>(dispatch(deletePost(post._id)))} >
          <RiDeleteBinLine /> Delete
        </button>
        </div>
      </div>
    </div>
  )
}

export default Post