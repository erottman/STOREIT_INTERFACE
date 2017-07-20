import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl, PanelGroup } from 'react-bootstrap'
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
      activeKey: "1",
    }
    this.updateBoxes = this.updateBoxes.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
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

  updateBoxes() {
    axios.get(`${AUTH_URL}api/boxes`)
      .then(response => {
        console.log('INSIDE THEN')
        this.setState({
          boxes: response.data,
          activeKey: "1",
        })

      })
      .catch(err => {
        console.log('INSIDE CATCH')
        console.log(err)
      })
    }

  getTotalValue() {
      let total = 0;
      this.state.items.map(item => {
      total += parseInt(item.value)
    })
    return total;
  }

  getTotalQuantity() {
      let total = 0;
      this.state.items.map(item => {
      total += item.quantity
    })
    return total;
  }

  handleSelect(activeKey) {
    this.setState({activeKey})
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
    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
      <Panel header="Current Boxes" eventKey="1">
      <CurrentBoxes boxes={this.state.boxes} />
      </Panel>
      <Panel header="Add Boxes" eventKey="2">
      <Add updateBoxes={this.updateBoxes} />
      </Panel>
      <Panel header="Edit Boxes" eventKey="3">
      <Edit updateBoxes={this.updateBoxes} />
      </Panel>
      <Panel header="Delete Boxes" eventKey="4">
      <Delete updateBoxes={this.updateBoxes}  />
      </Panel>
    </PanelGroup>
  );
/*
  <Accordion>
    <Panel header="Current Boxes" defaultActiveKey="1">
    <CurrentBoxes boxes={this.state.boxes} />
    </Panel>
    <Panel header="Add Boxes" eventKey="2" expanded={this.state.expanded}>
    <Add updateBoxes={this.updateBoxes} />
    </Panel>
    <Panel header="Edit Boxes" eventKey="3" expanded={this.state.expanded}>
    <Edit updateBoxes={this.updateBoxes} />
    </Panel>
    <Panel header="Delete Boxes" eventKey="4" expanded={this.state.expanded}>
    <Delete updateBoxes={this.updateBoxes}  />
    </Panel>
  </Accordion>
);
*/
    return (
      <div>
      <div> {thumbnailInstance}</div>
      <div> {accordionInstance}</div>
    </div>
    )
  }
}

export default BoxesPage
