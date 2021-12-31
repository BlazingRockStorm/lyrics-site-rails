import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Song from './Song'

function Songs() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios.get('/api/songs')
      .then(resp => setSongs(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  const songslist = songs.map((song) => {
    return (
      <Song
        key={song.id}
        name={song.name}
        spotifyLink={song.spotify_link}
      />
    )
  })

  return (
    <div>
      {songslist}
    </div>
  )
}

export default Songs
