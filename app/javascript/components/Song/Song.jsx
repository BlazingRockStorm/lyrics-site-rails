import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { styled } from '@mui/material'

function Song() {
  const [song, setSong] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/songs/${id}`)
      .then(resp => setSong(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  const Lyric = styled('div')({
    whiteSpace: 'pre-wrap'
  })

  return (
    <div>
      <p>{song.name}</p>
      <Lyric>{song.lyric}</Lyric>
    </div>
  )
}

export default Song