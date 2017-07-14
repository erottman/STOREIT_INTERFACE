import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import Search from './Search'
import CurrentBoxes from './CurrentBoxes'
import Add from './Add'
import Edit from './Edit'
import Boxes  from '../images/manageboxes.png'
import axios from 'axios'


class BoxesPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes:[],
      items:[],
      value : 400,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/boxes')
      .then(response => {
        this.setState({
          boxes: response.data
        })
      })
      .catch(err => {
      })

    axios.get('http://localhost:3000/api/items')
      .then(response => {
        this.setState({
          items: response.data
        })
      })
      .catch(err => {
      })
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
          <p>Total Boxes= {this.state.boxes.length} | Total Items=  {this.state.items.length}  | Total Value=${this.state.value}</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (
  <Accordion>
    <Panel header="Current Boxes" eventKey="1">
    <CurrentBoxes />
    </Panel>
    <Panel header="Manage Items" eventKey="2">
    <Search />
    </Panel>
    <Panel header="Add Boxes" eventKey="3">
    <Add />
    </Panel>
    <Panel header="Edit or Delete Boxes" eventKey="4">
    <Edit />
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
