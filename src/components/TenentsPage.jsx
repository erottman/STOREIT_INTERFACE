import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import ManageProfile from './ManageProfile'
import axios from 'axios'


class TenentsPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        tenent: {},
        unit: [],
        facility: [],
      }
    }

  componentDidMount() {
   //axios.get(`/api/users/${this.props.params.id}`)
   axios.get('http://localhost:3000/api/tenents/2')
      .then(response => {
        this.setState({
          tenent : response.data,
        })
      })
      .catch(err => {
      })

  axios.get('http://localhost:3000/api/facilities/2')
     .then(response => {
       this.setState({
         facility : response.data[0],
       })
     })
     .catch(err => {
     })

  axios.get('http://localhost:3000/api/units/2')
     .then(response => {
       this.setState({
         unit : response.data[0],
       })
     })
     .catch(err => {
     })
  }



  render() {

    const profilebutton = (
      <button>
      <p><Button className="profilebutton" href="/boxes">Manage Storage</Button>&nbsp;</p>
      </button>
  );

    const profileOverview = (
      <ListGroup className="profileOverview">
        <ListGroupItem href="/facility">{this.state.facility.name} </ListGroupItem>
        <ListGroupItem href="/boxes">Storage Unit: {this.state.unit.unit_number}  |   Total Boxes:  42</ListGroupItem>
        <ListGroupItem href="/items">Total Items: 324     |   Total Value: $8598</ListGroupItem>
      </ListGroup>
    );


    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src={this.state.tenent.image_url} alt="260x260">
          <h3>{this.state.tenent.first_name} {this.state.tenent.last_name}</h3>
          <p>{profileOverview}</p>
          <p>{profilebutton}</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (
  <Accordion>
    <Panel header="Manage Profile" eventKey="1">
    <ManageProfile />
    </Panel>
  </Accordion>
);
    return (
      <div>
      <div> {thumbnailInstance}</div>
      <div> {accordionInstance}</div>
    </div>
    )
  }
}

export default TenentsPage
