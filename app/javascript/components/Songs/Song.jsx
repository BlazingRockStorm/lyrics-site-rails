import React from 'react'
import { Card } from 'react-bootstrap'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const SongName = styled(Link)({
  color: 'black',
  textDecoration: 'none'
})

const Song = ({ id, name, spotifyLink, ...props }) => {
  return (
    <Card>
      <SongName to={`/songs/${id}`} >
        <h3>{name}</h3>
      </SongName>
      <a href={`${spotifyLink}`} target='_blank' >スポティファイで聞こう！</a>
    </Card>
  )
}

export default Song
