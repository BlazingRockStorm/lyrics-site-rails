import React from 'react'
import { Form, Button } from 'react-bootstrap'

const EditSongForm = ({ name, spotifyLink, lyric, genreId, editSong = (f) => f, ...props }) => {
  let _name, _lyric, _spotify_link, _genreId

  const onSubmit = (e) => {
    e.preventDefault()
    editSong(_name.value, _lyric.value, _spotify_link.value, _genreId.value)
    _name.value = ''
    _lyric.value = ''
    _spotify_link.value = ''
    _genreId.value = ''
    _name.focus()
    props.setEditable(false)
  }

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>曲名</Form.Label>
        <Form.Control ref={(input) => (_name = input)} type='text' placeholder='Name' defaultValue={name} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>ジャンル</Form.Label>
        <Form.Control ref={(input) => (_genreId = input)} placeholder='Genre' defaultValue={genreId} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>歌詞</Form.Label>
        <Form.Control as='textarea' rows={20} ref={(input) => (_lyric = input)} placeholder='Lyric' defaultValue={lyric} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>スポティファイリンク</Form.Label>
        <Form.Control ref={(input) => (_spotify_link = input)} type='text' placeholder='Spotify Link'  defaultValue={spotifyLink} />
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