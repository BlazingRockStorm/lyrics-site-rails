import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import Song from './Song'

function Songs() {
  // const [songs, setSongs] = useState([])

  // useEffect(() => {
  //   axios.get('/api/songs.json')
  //     .then(resp => setSongs(resp.data.data))
  //     .catch(data => console.log('error', data))
  // }, [])

  const songs = [
    {
      id: 1,
      name: 'One more time',
      spotify_link: 'https://open.spotify.com/track/7Jxei7V1uUUIai2uPnMg7Z?si=1fafd3f1e6b54b08'
    }, {
      id: 2,
      name: 'Taking off',
      spotify_link: 'https://open.spotify.com/track/7bmdV1IiqeCIK1Lb3klDVV?si=da469ab621ed4429'
    }
  ]

  const songslist = songs.map((song) => {
    return (
      <Song
        key={song.id}
        name={song.name}
        spotifyLink = {song.spotify_link}
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
