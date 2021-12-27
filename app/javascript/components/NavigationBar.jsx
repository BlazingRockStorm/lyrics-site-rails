import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { styled } from '@mui/material/styles'

const MyNavbar = styled(Navbar)({
  background: '#1D1D6A'
})

function NavigationBar() {
  return (
    <MyNavbar variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#pricing'>Pricing</Nav.Link>
        </Nav>
      </Container>
    </MyNavbar>
  )
}

export default NavigationBar