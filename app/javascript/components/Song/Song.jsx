import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Detail from './Detail'
import EditSongForm from './EditSongForm'

function Song() {
  const [song, setSong] = useState([])
  const [editable, setEditable] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/songs/${id}`)
      .then(resp => setSong(resp.data))
      .catch(data => console.log('error', data))
  }, [])

  function editSong() { }

  return (
    <Container>
      <Row>
        <Col md={9}>
          {
            editable ? <EditSongForm
              name={song.name}
              spotifyLink={song.spotify_link}
              lyric={song.lyric}
              editSong={editSong}
              setEditable={setEditable}
            /> : <Detail
              name={song.name}
              spotifyLink={song.spotify_link}
              lyric={song.lyric}
              editable={editable}
              setEditable={setEditable}
            />
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Song