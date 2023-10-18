
import FileBase from 'react-file-base64';
import React, {useState} from 'react'



const Form = () => {

const [postData,setPostData] =useState({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
  })

const handleSubmit = async (e) => {}
const clear = () => {}

  return (
    <div className="flex flex-col flex-1 items-start justify-center w-full mf:mt-0 mt-10 border border-gray-300 rounded-lg bg-blue">
      <div className="p-5 sm:w-96 w-full flex-col justify-start items-center ">
        <form autoComplete="off" onSubmit={handleSubmit} >
          <div className="text-white pb-2 font-mono text-2xl">Post it!</div>
          <input placeholder="creator" value={postData.creator} name="creator" type="text" onChange={(e) => setPostData({ ...postData, creator: e.target.value })} className="my-2 w-full p-3 outline-none bg-gray-50 text-white border-none text-sm white-glassmorphism rounded-lg font-mono" />
          <input placeholder="title" value={postData.title} name="title" type="text" onChange={(e) => setPostData({ ...postData, title: e.target.value })} className="my-2 w-full p-3 outline-none bg-gray-50 text-white border-none text-sm white-glassmorphism rounded-lg font-mono" />
          <input placeholder="message" value={postData.message} name="message" type="text" onChange={(e) => setPostData({ ...postData, message: e.target.value })} className="my-2 w-full p-3 outline-none bg-gray-50 text-white border-none text-sm white-glassmorphism rounded-lg font-mono" />
          <input placeholder="tags" name="tags" value={postData.tags} type="text" onChange={(e) => setPostData({ ...postData, tags: e.target.value })} className="my-2 w-full p-3 outline-none bg-gray-50 text-white border-none text-sm white-glassmorphism rounded-lg font-mono" />  
          <div className="w-[97%] my-5"><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
          <button type="submit" className="m-2 text-white bg-[#2952e3] w-full  rounded-full cursor-pointer px-4 py-2 min-h-[40px] font-mono">Submit</button>
          <button type="submit" className="m-2 text-white bg-[#2952e3] w-full  rounded-full cursor-pointer  px-4 py-2 min-h-[40px] font-mono" onClick={clear}>Clear</button>
        </form>
      </div>
    </div>
  )
}

export default Form