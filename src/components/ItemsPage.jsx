import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import CurrentItems from './CurrentItems'
import AddItems from './AddItems'
import Items  from '../images/items.png'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class ItemsPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        box: {},
        items: [],
        quantity: 0,
        value: 0,
      }
      this.updateItems = this.updateItems.bind(this)
    }

  componentDidMount() {
   axios.get(`${AUTH_URL}api/boxes/${this.props.location.query.id}`)
      .then(response => {
        console.log("boxes",response.data);
        this.setState({
          box : response.data,
        })
      })
      .catch(err => {
        console.log('error', err);
      })

  axios.get(`${AUTH_URL}api/items`)
    .then(response => {
      console.log('items', response.data);
      console.log('id', this.props.location.query.id);
      let itemMatch = []
      response.data.map(item => {
        console.log('item', item);
      if(item.box_id == this.props.location.query.id) {

          itemMatch.push(item)
          console.log('itemMatch', itemMatch);
            this.setState({
            items: itemMatch,
          })

        }
      })
    })
    .catch(err => {

    })
  }

  updateItems() {
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



  render() {
    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src={Items} alt="260x260">
          <h3>{this.state.box.identifier}</h3>
          <p>{this.state.box.description}</p>
          <p>Room: {this.state.box.room} </p>
          <p>Date Packed: {this.state.box.date_packed} | Date Stored: {this.state.box.date_stored}</p>
          <p>Unit Location: {this.state.box.unit_location} </p>
          <p>Total Items: {this.getTotalQuantity(this.state.items)} |  Value: ${this.getTotalValue(this.state.items)} </p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (
  <Accordion>
    <Panel header="Current Items"  defaultActiveKey="1">
    <CurrentItems  items={this.state.items} />
    </Panel>
    <Panel header="Add Items" eventKey="2">
    <AddItems updateItems={this.updateItems} box={this.state.box} />
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

export default ItemsPage
