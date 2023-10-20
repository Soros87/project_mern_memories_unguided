import React from 'react'
import Posts from'./Posts/Posts'
import Form from './Form/Form'
import {useState} from 'react'


const Welcome = () => {

  const[currentId,setCurrentId] = useState(0)

  return (
    <div className="flex w-full justify-center items-center mt-3 2xl:px-20 text-white">
       <div className="flex flex-col-2 md:p-12 py-4 px-4 gap-10">
       <Form currentId = {currentId} setCurrentId={setCurrentId}/>
       <Posts setCurrentId={setCurrentId}/>
      </div>
    </div>
  )
}

export default Welcome