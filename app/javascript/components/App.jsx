import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Songs from './Songs/Songs'
import Song from './Song/Song'
import Header from './Header'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

function App() {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Songs />} />
        <Route path="/songs/:id" element={<Song />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
