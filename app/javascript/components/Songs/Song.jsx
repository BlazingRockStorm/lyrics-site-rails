import React from 'react'
import { Card } from 'react-bootstrap'
import { styled } from '@mui/material/styles'

const SongName = styled('h3')({
  color: 'black'
})

const Song = ({ name, spotifyLink, ...props }) => {
  return (
    <Card>
      <SongName>
        {name}
      </SongName>
      <a href={`${spotifyLink}`} target="_blank" >スポティファイで聞こう！</a>
    </Card>
  )
}

export default Song
