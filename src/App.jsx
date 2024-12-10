import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className= 'bg-[#1F1E24] w-screen h-screen flex overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      
    </div>
  )
}

export default App
