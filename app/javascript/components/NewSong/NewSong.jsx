import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import NewSongForm from './NewSongForm'

function NewSong() {
  function addNewSong(name, lyric, spotify_link, genre_id) {
    axios
      .post("/api/songs", { song: { name, lyric, spotify_link, genre_id } })
      .catch(data => console.log('error', data))
  }

  return (
    <Container>
      <Row>
        <Col md={9}>
          <NewSongForm onNewSong={addNewSong} />
        </Col>
      </Row>
    </Container>
  )
}

export default NewSong