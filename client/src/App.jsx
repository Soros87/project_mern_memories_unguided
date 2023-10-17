import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {Navbar,Welcome} from './components'

const App = () =>  {
   
  return (
    <div className="min-h-screen gradient-bg-welcome">
      <div >
        <Navbar />
        <Welcome />
      </div>
    </div>
  )
}

export default App
