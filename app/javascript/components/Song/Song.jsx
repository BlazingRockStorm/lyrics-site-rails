import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'
import Detail from './Detail'

function Song() {
  const [song, setSong] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/songs/${id}`)
      .then(resp => setSong(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Detail
            name={song.name}
            spotifyLink={song.spotify_link}
            lyric={song.lyric}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Song