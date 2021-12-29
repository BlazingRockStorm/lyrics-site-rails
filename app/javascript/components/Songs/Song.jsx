import React from 'react'
import { Card } from 'react-bootstrap'
import { styled } from '@mui/material/styles'

const SongName = styled('h3')({
  color: 'black'
})

const Song = ({ name, spotify_link, ...props }) => {
  return (
    <Card>
      <SongName>
        {name}
      </SongName>
      <a href={spotify_link} target="_blank" >Listen on Spotify</a>
    </Card>
  )
}

export default Song
