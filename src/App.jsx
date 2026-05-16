import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contect from './Pages/Contect'

const App = () => {
  return (
    <div className='main-body' >
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contect' element={<Contect/>} />
      </Routes>
    </div>
  )
}

export default App