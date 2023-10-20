
import FileBase from 'react-file-base64';
import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {createPost,getPosts,updatePost} from '../../actions/posts'

//GET THE CURRENT ID OF THE POST


const Form = ({currentId,setCurrentId}) => {

const [postData,setPostData] =useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })

//only find the post that has the same id as our currentId
const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null)) //post comes from redux store


const dispatch = useDispatch()

useEffect(() => {
  dispatch(getPosts())
}, [dispatch])

//update the Form based on the id
//useEffect -> (callback func/action based on changes in dependency data, post)
useEffect(() => {
  if (post) setPostData(post);
}, [post]);

const handleSubmit = async (e) => {
  e.preventDefault(); //event - not to get the refresh in the browser
  
  if (currentId) {
    dispatch(updatePost(currentId,postData))
  } else { 
    dispatch(createPost(postData)) 
  }



}
const clear = () => {}


  return (
    <div className="flex flex-col flex-1 items-start justify-center w-full mf:mt-0 mt-10 border border-gray-300 rounded-lg bg-blue">
      <div className="p-5 sm:w-96 w-full flex-col justify-start items-center ">
        <form autoComplete="off" onSubmit={handleSubmit} >
          <div className="text-white pb-2 font-mono text-2xl">Post it!</div>
            <input placeholder="creator" value={postData.creator} name="creator" type="text" onChange={(e) => setPostData({ ...postData, creator: e.target.value })} className="my-2 w-full flex-initial p-3 outline-none bg-gray-50 text-black border-none text-sm white-glassmorphism rounded-lg font-mono" />
            <input placeholder="title" value={postData.title} name="title" type="text" onChange={(e) => setPostData({ ...postData, title: e.target.value })} className="my-2 w-full flex-initial p-3 outline-none bg-gray-50 text-black border-none text-sm white-glassmorphism rounded-lg font-mono" />
            <input placeholder="message" value={postData.message} name="message" type="text" onChange={(e) => setPostData({ ...postData, message: e.target.value })} className="my-2 w-full flex-initial p-3 outline-none bg-gray-50 text-black border-none text-sm white-glassmorphism rounded-lg font-mono" />
            <input placeholder="tags" name="tags" value={postData.tags} type="text" onChange={(e) => setPostData({ ...postData, tags: e.target.value })} className="my-2 w-full flex-initial p-3 outline-none bg-gray-50 text-black border-none text-sm white-glassmorphism rounded-lg font-mono" />  
          <div className="w-[97%] my-5"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <button type="submit" className="m-2 text-white bg-[#2952e3] w-full  rounded-full cursor-pointer px-4 py-2 min-h-[40px] font-mono">Submit</button>
          <button type="submit" className="m-2 text-white bg-[#2952e3] w-full  rounded-full cursor-pointer  px-4 py-2 min-h-[40px] font-mono" onClick={clear}>Clear</button>
        </form>
      </div>
    </div>
  )
}

export default Form