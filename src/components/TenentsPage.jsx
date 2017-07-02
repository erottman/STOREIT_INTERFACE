import React, { Component } from 'react'
import { Link } from 'react-router'
import { Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'

class TenentPage extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={4}>
            <Image src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/p320x320/15940632_10211188445325227_1050933472522230573_n.jpg?oh=5126570961512041c40029a5615d1dae&oe=59CE6147" circle />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default TenentPage