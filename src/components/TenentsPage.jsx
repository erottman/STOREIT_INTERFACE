import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import ManageProfile from './ManageProfile'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class TenentsPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        tenent: {},
        unit: [],
        facility: [],
        boxes: [],
        items: [],
        value: 0,
      }
      this.updateTenent = this.updateTenent.bind(this)
    }

  componentDidMount() {
   axios.get(`${AUTH_URL}api/tenents/${this.props.location.query.id}`)
      .then(response => {
        this.setState({
          tenent : response.data,
        })
      })
      .catch(err => {
      })

  axios.get(`${AUTH_URL}api/facilities/${this.props.location.query.id}`)
     .then(response => {
       this.setState({
         facility : response.data[0],
       })
     })
     .catch(err => {
     })

  axios.get(`${AUTH_URL}api/units/${this.props.location.query.id}`)
     .then(response => {
       this.setState({
         unit : response.data[0],
       })
     })
     .catch(err => {
     })

   axios.get(`${AUTH_URL}api/boxes`)
      .then(response => {
        this.setState({
          boxes : response.data,
        })
      })
      .catch(err => {
      })

  axios.get(`${AUTH_URL}api/items`)
     .then(response => {
       this.setState({
         items : response.data,
       })
     })
     .catch(err => {
     })
  }

  updateTenent(tenant) {
    this.setState({
      tenent: tenant
    })
  }


  getTotalValue() {
      let total = 0;
      this.state.items.map(item => {
      total += parseInt(item.value)
      console.log('value', item.value);
    })
    console.log('value', total);
    return total;
  }

  getTotalQuantity() {
      let total = 0;
      this.state.items.map(item => {
      total += item.quantity
      console.log('quantity', item.quantity);
    })
    console.log('total', total);
    return total;
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
        <ListGroupItem href="/boxes">Storage Unit: {this.state.unit.unit_number}  |   Total Boxes:  {this.state.boxes.length} </ListGroupItem>
        <ListGroupItem href="/boxes">Total Items: {this.getTotalQuantity(this.state.items)}     |   Total Value: ${this.getTotalValue(this.state.items)}</ListGroupItem>
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
    <ManageProfile updateTenent={this.updateTenent} tenent={this.state.tenent} />
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
