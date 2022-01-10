import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NewSongForm = ({ onNewSong = (f) => f }) => {
  let _name, _lyric, _spotify_link
  let navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    onNewSong(_name.value, _lyric.value, _spotify_link.value)
    _name.value = ''
    _lyric.value = ''
    _spotify_link.value = ''
    _name.focus()
    navigate('/', { replace: true })
  }

  return (
    <Form onSubmit={submit}>
      <Form.Group className='mb-3'>
        <Form.Label>Song Name</Form.Label>
        <Form.Control ref={(input) => (_name = input)} type='text' placeholder='Name' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Lyric</Form.Label>
        <Form.Control as='textarea' rows={20} ref={(input) => (_lyric = input)} placeholder='Lyric' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Spotify Link</Form.Label>
        <Form.Control ref={(input) => (_spotify_link = input)} type='text' placeholder='Spotify Link' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>

      <Link className='btn btn-link' to='/'>戻る</Link>
    </Form>
  )
}

export default NewSongForm