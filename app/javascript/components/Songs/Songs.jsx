import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Song from './Song'
import { Link } from 'react-router-dom'

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
        id={song.id}
        name={song.name}
        spotifyLink={song.spotify_link}
      />
    )
  })

  return (
    <div>
      {songslist}
      <Link className='btn btn-primary' to='/songs/new'>新歌詞を追加する</Link>
    </div>
  )
}

export default Songs
