import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

function Song() {
  const [song, setSong] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/songs/${id}`)
      .then(resp => setSong(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  return (
    <div>
      <p>{song.name}</p>
      <p>{song.lyric}</p>
    </div>
  )
}

export default Song