import React from 'react'
import Posts from'./Posts/Posts'
import Form from './Form/Form'

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center mt-3 2xl:px-20 text-white">
       <div className="flex flex-col md:p-12 py-4 px-4">
       <Form />
       <Posts />
      
      </div>
    </div>
  )
}

export default Welcome