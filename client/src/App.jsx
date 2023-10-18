import { useState, useEffect } from 'react'
import './App.css'
import {useDispatch} from 'react-redux'
import {Navbar,Welcome} from './components'
import {getPosts} from './actions/posts'

const App = () =>  {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


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
