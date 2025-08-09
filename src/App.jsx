import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import About from '@/pages/About'
import NoMatch from '@/pages/404'
import Projects from '@/pages/Projects'
import ShowProject from '@/pages/ShowProject'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ShowProject />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default App