import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Project from './Pages/Project'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
