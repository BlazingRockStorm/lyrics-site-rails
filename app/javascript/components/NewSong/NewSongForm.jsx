import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const NewSongForm = ({ onNewSong = (f) => f }) => {
  let _name, _lyric, _spotify_link, _genreId
  let navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    onNewSong(_name.value, _lyric.value, _spotify_link.value, _genreId.value)
    _name.value = ''
    _lyric.value = ''
    _spotify_link.value = ''
    _genreId.value = ''
    _name.focus()
    navigate('/', { replace: true })
  }

  return (
    <Form onSubmit={submit}>
      <Form.Group className='mb-3'>
        <Form.Label>曲名</Form.Label>
        <Form.Control ref={(input) => (_name = input)} type='text' placeholder='Name' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>ジャンル</Form.Label>
        <Form.Control ref={(input) => (_genreId = input)} placeholder='Genre' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>歌詞</Form.Label>
        <Form.Control as='textarea' rows={20} ref={(input) => (_lyric = input)} placeholder='Lyric' />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>スポティファイリンク</Form.Label>
        <Form.Control ref={(input) => (_spotify_link = input)} type='text' placeholder='Spotify Link' />
      </Form.Group>

      <Button variant='primary' type='submit'>
        登録
      </Button>

      <Link className='btn btn-link' to='/'>戻る</Link>
    </Form>
  )
}

export default NewSongForm