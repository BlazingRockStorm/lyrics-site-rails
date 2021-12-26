import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
