import React from 'react'
import { Card, Button } from 'react-bootstrap'

const EditSongForm = ({ name, spotifyLink, lyric, editable, setEditable, ...props }) => {
  return (
    <Card>
      <Card.Body>
        <p>Input: {name}</p>
        <p>Input: {spotifyLink}</p>
        <p>Input: {lyric}</p>
        <Button>修正する</Button>
        <Button onClick={() => setEditable(false)}>キャンセル</Button>
      </Card.Body>
    </Card>
  )
}

export default EditSongForm