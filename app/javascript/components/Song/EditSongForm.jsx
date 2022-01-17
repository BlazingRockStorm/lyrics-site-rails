import React from 'react'
import { Form, Button } from 'react-bootstrap'

const EditSongForm = ({ name, spotifyLink, lyric, ...props }) => {
  return (
    <Form>
      <Form.Group className='mb-3'>
        <Form.Label>Song Name</Form.Label>
        <Form.Control ref={(input) => (name = input)} type='text' placeholder='Name' defaultValue={name} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Lyric</Form.Label>
        <Form.Control as='textarea' rows={20} ref={(input) => (lyric = input)} placeholder='Lyric' defaultValue={lyric} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Spotify Link</Form.Label>
        <Form.Control ref={(input) => (spotifyLink = input)} type='text' placeholder='Spotify Link'  defaultValue={spotifyLink} />
      </Form.Group>

      <Button variant='primary' type='submit'>修正完了</Button>
      <Button variant='secondary'
        onClick={() => props.setEditable(false)}
        className='mx-2'
      >
        キャンセル
      </Button>
    </Form>
  )
}

export default EditSongForm