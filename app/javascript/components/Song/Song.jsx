import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Song() {
  const [song, setSong] = useState([])
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/songs/${id}`)
      .then(resp => setSong(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  const Lyric = styled('div')({
    whiteSpace: 'pre-wrap'
  })

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Card>
            <Card.Header>
              <Card.Title>{song.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <a href={`${song.spotify_link}`} target='_blank' >スポティファイで聞こう！</a>
              </Card.Subtitle>
            </Card.Header>
            <Card.Body>
              <Lyric>{song.lyric}</Lyric>
              <Link to='/'>戻る</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Song