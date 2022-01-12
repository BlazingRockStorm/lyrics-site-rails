import React from 'react'
import { Card } from 'react-bootstrap'

const EditSongForm = ({ name, spotifyLink, lyric, editable, ...props }) => {
  return (
    <Card>
      <Card.Body>
        <p>Input: {name}</p>
        <p>Input: {spotifyLink}</p>
        <p>Input: {lyric}</p>
        <Button>修正する</Button>
        <Button>キャンセル</Button>
      </Card.Body>
    </Card>
  )
}

export default EditSongForm