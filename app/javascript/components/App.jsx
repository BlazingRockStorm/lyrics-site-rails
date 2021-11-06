import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' exact component={Home} />
      </Routes>
    </div>
  )
}

export default App
