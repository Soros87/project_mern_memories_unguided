import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {Navbar} from './components'

const App = () =>  {
   
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div className=" text-white pt-6 pl-6 text-3xl font-mono text-center">
        Memories
        <Navbar />
      </div>
    </div>
  )
}

export default App
