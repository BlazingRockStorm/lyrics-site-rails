import React from 'react'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { styled } from '@mui/material/styles'

const MyCopyRightFooter = styled('div')({
  backgroundColor: 'aliceblue'
})

var linkfooter = {
  background: '#222222',
  color: 'white'
}

const Footer = () =>
  <footer className='font-small pt-4'>
    <Container fluid className='text-center text-md-left' style={linkfooter}>
      <Row>
        <Col md={6} mt-md={0} mt={3}>
          <h5 className='text-uppercase'>Gryqhonの歌詞サイト</h5>
          <p>Ruby on RailsとReactで歌詞サイトを作る。<br/>AWSにディプロイする</p>
        </Col>

        <hr className='clearfix w-100 d-md-none pb-0' />

        <Col md={3} mb-md={0} mb={3}>
          <h5 className='text-uppercase'>クイックリンク</h5>
          <ul className='list-unstyled'>
            <li><a href='#!'>リンク 1</a></li>
            <li><a href='#!'>リンク 2</a></li>
            <li><a href='#!'>リンク 3</a></li>
            <li><a href='#!'>リンク 4</a></li>
          </ul>
        </Col>

        <Col md={3} mb-md={0} mb={3}>
          <h5 className='text-uppercase'>クイックリンク</h5>
          <ul className='list-unstyled'>
            <li><a href='#!'>リンク 1</a></li>
            <li><a href='#!'>リンク 2</a></li>
            <li><a href='#!'>リンク 3</a></li>
            <li><a href='#!'>リンク 4</a></li>
          </ul>
        </Col>
      </Row>
    </Container>

    <ListGroup horizontal className='d-flex justify-content-center'>
      <ListGroup.Item><a href='#!'>運営会社</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>メディア掲載情報</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>利用規約</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>プライバシーポリシー</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>お問い合わせ・リクエスト</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>コンテンツ</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>広告掲載</a></ListGroup.Item>
      <ListGroup.Item><a href='#!'>スタッフ募集</a></ListGroup.Item>
    </ListGroup>

    <MyCopyRightFooter className='text-center py-3'>
      <p>
        © 2021 Copyright: <a href='https://github.com/BlazingRockStorm'>BlazingRockStorm</a> a.k.a. Gryqhon
      </p>
    </MyCopyRightFooter>

  </footer>

export default Footer