import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import CurrentBoxes from './CurrentBoxes'
import Add from './Add'
import Delete from './Delete'
import Edit from './Edit'
import Boxes  from '../images/manageboxes.png'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class BoxesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes:[],
      items:[],
      value : 0,
    }
  }

  componentDidMount() {
    axios.get(`${AUTH_URL}api/boxes`)
      .then(response => {
        this.setState({
          boxes: response.data
        })
      })
      .catch(err => {
      })

    axios.get(`${AUTH_URL}api/items`)
      .then(response => {
        this.setState({
          items: response.data
        })
      })
      .catch(err => {
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

    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src={Boxes} alt="260x260">
          <h3>Manage Storage</h3>
          <p>Add boxes with item details and storage location</p>
          <p>Easily look-up boxes to view and edit item details</p>
          <p>Total Boxes= {this.state.boxes.length} | Total Items=  {this.getTotalQuantity(this.state.items)}  | Total Value= ${this.getTotalValue(this.state.items)}</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (

  <Accordion>
    <Panel header="Current Boxes" defaultActiveKey="1" >
    <CurrentBoxes />
    </Panel>
    <Panel header="Add Boxes" eventKey="2">
    <Add />
    </Panel>
    <Panel header="Edit Boxes" eventKey="3">
    <Edit />
    </Panel>
    <Panel header="Delete Boxes" eventKey="4">
    <Delete />
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

export default BoxesPage
