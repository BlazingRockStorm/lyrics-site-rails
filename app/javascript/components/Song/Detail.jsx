import React from 'react'
import { Card } from 'react-bootstrap'
import { styled } from '@mui/material/styles'

const Lyric = styled('div')({
  whiteSpace: 'pre-wrap'
})

const Detail = ({ name, spotifyLink, lyric, ...props }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <a href={`${spotifyLink}`} target='_blank' >スポティファイで聞こう！</a>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Lyric>{lyric}</Lyric>
      </Card.Body>
    </Card>
  )
}

export default Detail