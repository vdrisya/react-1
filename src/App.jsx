import { useState } from 'react'
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Keep this import
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Add from './components/Add'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes>
      </>
  )
}

export default App
