import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import NewSongForm from './NewSongForm'

function NewSong() {
  const [songs, setSongs] = useState([])

  function addNewSong(name, lyric, spotify_link) {
    axios
      .post("/api/songs", { song: { name, lyric, spotify_link } })
      .then(resp => setSongs([songs, resp.data]))
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