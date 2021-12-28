import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import SongDetail from './pages/SongDetail'
import Header from './Header'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/songs/:id" element={<SongDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
