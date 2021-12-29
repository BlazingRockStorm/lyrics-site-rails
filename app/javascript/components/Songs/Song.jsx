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
      <p>{spotify_link}</p>
    </Card>
  )
}

export default Song
