import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
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
          <Link className='btn btn-link' to='/'>戻る</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Song