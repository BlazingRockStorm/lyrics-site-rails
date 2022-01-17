import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const Lyric = styled('div')({
  whiteSpace: 'pre-wrap'
})

const Detail = ({ name, spotifyLink, lyric, setEditable, ...props }) => {
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
        <Button onClick={() => {setEditable(true)}} >修正する</Button>
        <Link className='btn btn-link' to='/'>戻る</Link>
      </Card.Body>
    </Card>
  )
}

export default Detail