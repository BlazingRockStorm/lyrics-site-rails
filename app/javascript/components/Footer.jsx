import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { styled } from '@mui/material/styles'

const MyCopyRightFooter = styled('div')({
  backgroundColor: 'aliceblue'
})

const Footer = () =>
  <footer className='page-footer font-small pt-4'>
    <Container fluid className='text-center text-md-left'>
      <Row>
        <Col md={6} mt-md={0} mt={3}>
          <h5 className='text-uppercase'>Footer Content</h5>
          <p>Here you can use rows and columns to organize your footer content.</p>
        </Col>

        <hr className='clearfix w-100 d-md-none pb-0' />

        <Col md={3} mb-md={0} mb={3}>
          <h5 className='text-uppercase'>Links</h5>
          <ul className='list-unstyled'>
            <li><a href='#!'>Link 1</a></li>
            <li><a href='#!'>Link 2</a></li>
            <li><a href='#!'>Link 3</a></li>
            <li><a href='#!'>Link 4</a></li>
          </ul>
        </Col>

        <Col md={3} mb-md={0} mb={3}>
          <h5 className='text-uppercase'>Links</h5>
          <ul className='list-unstyled'>
            <li><a href='#!'>Link 1</a></li>
            <li><a href='#!'>Link 2</a></li>
            <li><a href='#!'>Link 3</a></li>
            <li><a href='#!'>Link 4</a></li>
          </ul>
        </Col>
      </Row>
    </Container>

    <MyCopyRightFooter className='text-center py-3'>© 2021 Copyright:
      <p>
        <a href='https://github.com/BlazingRockStorm'>BlazingRockStorm</a> a.k.a. Gryqhon
      </p>
    </MyCopyRightFooter>

  </footer>

export default Footer