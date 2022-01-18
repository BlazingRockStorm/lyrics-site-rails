import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Detail from './Detail'
import EditSongForm from './EditSongForm'

function Song() {
  const [song, setSong] = useState([])
  const [songGenre, setSongGenre] = useState([])
  const [editable, setEditable] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`/api/songs/${id}`)
      .then(function (resp) {
        setSong(resp.data)
        setSongGenre(resp.data.genre.name)
      })
      .catch(data => console.log('error', data))
  }, [])

  function editSong(name, lyric, spotify_link, genre_id) {
    axios
      .patch(`/api/songs/${id}`, { song: { name, lyric, spotify_link, genre_id } })
      .then(function (resp) {
        setSong(resp.data)
        setSongGenre(resp.data.genre.name)
      })
      .catch(data => console.log('error', data))
  }

  return (
    <Container>
      <Row>
        <Col md={9}>
          {
            editable ? <EditSongForm
              name={song.name}
              spotifyLink={song.spotify_link}
              lyric={song.lyric}
              genreId={song.genre_id}
              editSong={editSong}
              setEditable={setEditable}
            /> : <Detail
              name={song.name}
              genre={songGenre}
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