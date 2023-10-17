import React from 'react'
import Posts from'./Posts/Posts'
import Form from './Form/Form'

const Welcome = () => {
  return (
    <div className="flex flex-col items-center w-full mt-3 text-white">
      <Posts />
      <Form />
    </div>
  )
}

export default Welcome