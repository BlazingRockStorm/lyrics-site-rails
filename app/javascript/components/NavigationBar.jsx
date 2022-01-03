import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

var mynavbarclass = {
  background: '#1D1D6A',
  fontSize: '20px',
  fontWeight: 'bold'
}

function NavigationBar() {
  return (
    <Navbar variant='dark' style={mynavbarclass}>
      <Container>
        <Nav className='m-auto'>
          <LinkContainer to='/'><Nav.Link>ホーム</Nav.Link></LinkContainer>
          <Nav.Link href='#searchsong'>歌詞検査</Nav.Link>
          <Nav.Link href='#newsong'>新曲歌詞情報</Nav.Link>
          <Nav.Link href='#ranking'>ランキング</Nav.Link>
          <Nav.Link href='#watafure'>コトバのキモチ</Nav.Link>
          <Nav.Link href='#timemachine'>タイムマシン</Nav.Link>
          <Nav.Link href='#musicchannel'>音楽番組情報</Nav.Link>
          <Nav.Link href='#video'>動画プラス</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar