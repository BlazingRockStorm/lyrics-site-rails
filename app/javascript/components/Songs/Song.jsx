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
      <a href={`${spotifyLink}`} className='btn btn-link' target='_blank' >スポティファイで聞こう！</a>
      <button
        className='btn btn-danger'
        onClick={(e) => props.onDelete(id, e)}
      >
        削除
      </button>
    </Card>
  )
}

export default Song
