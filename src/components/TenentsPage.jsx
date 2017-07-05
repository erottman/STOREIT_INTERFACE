import React, { Component } from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem,Accordion, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'


class TenentPage extends Component {
  render() {

  const profileOverview = (
    <ListGroup className="profileOverview">
      <ListGroupItem href="/facilities">West Seattle Public Storage </ListGroupItem>
      <ListGroupItem href="/boxes">Storage Unit: 303  |   Total Boxes:  42</ListGroupItem>
      <ListGroupItem href="/items">Total Items: 324     |   Total Value: $8598</ListGroupItem>
    </ListGroup>
  );

  const profileManage = (
    <ListGroup className="profileManage">
      <ListGroupItem href="/facilities">Manage Storage</ListGroupItem>
      <ListGroupItem href="/units">Edit Profile</ListGroupItem>
    </ListGroup>
);

    return (
      <div>
      <h1>Welcome Erica</h1>
      <div>
      <Grid>
        <Row>
          <Col xs={6} xsPush={1} md={12}>
            <Image src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-1/p320x320/15940632_10211188445325227_1050933472522230573_n.jpg?oh=5126570961512041c40029a5615d1dae&oe=59CE6147" circle />
          </Col>
        </Row>
      </Grid>
    </div>
    <Grid>
      <Row>
        <Col xs={10} xsPush={1}  md={12}>
          {profileOverview}
      </Col>
    </Row>
  </Grid>
      <div>{profileManage}</div>
      </div>
    )
  }
}

export default TenentPage
