import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {Navbar} from './components'

const App = () =>  {
   
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div >
        <Navbar />
      </div>
    </div>
  )
}

export default App
