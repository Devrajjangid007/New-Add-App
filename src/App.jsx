import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contect from './Pages/Contect'
import Project from './Pages/Project'

const App = () => {
  return (
    <div className='main-body' >
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/contect' element={<Contect/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
      <Link to='/project'>Project</Link>
      <Link to='/contect'>Contect</Link>
      <Link to='/'>Home</Link>




    </div>
  )
}

export default App