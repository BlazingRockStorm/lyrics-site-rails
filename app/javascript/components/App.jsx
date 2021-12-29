import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Songs from './Songs/Songs'
// import SongDetail from './pages/SongDetail'
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
        {/* <Route path="/songs/:id" element={<SongDetail />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
