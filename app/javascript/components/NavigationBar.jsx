import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './navigationbar.css'

function NavigationBar() {
  return (
    <Navbar variant='dark' className='lyric_site_navbar'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar