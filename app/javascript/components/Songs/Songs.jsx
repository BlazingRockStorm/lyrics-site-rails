import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import { Route, Switch } from 'react-router-dom'

function Songs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('/api/songs.json')
    .then( resp => setSongs(resp.data.data))
    .catch( data => console.log('error', data))
  }, [])

  return (
    <div>
      Hello Rails
    </div>
  )
}

export default Songs
