import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Song from './Song'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Songs() {
  const [songs, setSongs] = useState([])

  useEffect(() => {
    axios.get('/api/songs')
      .then(resp => setSongs(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  function handleSongDelete(id, e) {
    e.preventDefault()
    axios.delete(`/api/songs/${id}`)
      .then(resp => {
        const targetIndex = songs.findIndex( song => {
          return song.id === resp.data.id
        })
        const newSongs = songs.slice();
        newSongs.splice(targetIndex, 1);
        setSongs(newSongs)
      })
      .catch(data => {
        console.log(data)
      })
  }

  const songslist = songs.map((song) => {
    return (
      <Song
        key={song.id}
        id={song.id}
        name={song.name}
        spotifyLink={song.spotify_link}
        onDelete={handleSongDelete}
      />
    )
  })

  return (
    <Container fluid>
      {songslist}
      <Link className='btn btn-primary' to='/songs/new'>新歌詞を追加する</Link>
    </Container>
  )
}

export default Songs
