import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import Login from './Login'



class LandingPage extends Component {
  render() {

    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src="http://greenbeltstorage.com/communities/1/000/001/368/671//images/3746266.png" alt="260x260">
          <h2>STOREit</h2>
          <p>Storage Unit Management Made Easy</p>
          <br></br>
          <Login />
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );


    return (
      <div>
      <div> {thumbnailInstance}</div>

    </div>
    )
  }
}

export default LandingPage
