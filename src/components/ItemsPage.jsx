import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import CurrentItems from './CurrentItems'
import AddItems from './AddItems'
import Items  from '../images/items.png'


class ItemsPage extends Component {
  render() {

    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src={Items} alt="260x260">
          <h3>Manage Items</h3>
          <p>View, Add, and Delete Current Items in a Box</p>
          <p>Easily look-up an items Details and Value</p>
          <p>Boxe= 2  Items=  4  Value= $150</p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (
  <Accordion>
    <Panel header="Current Items" eventKey="1">
    <CurrentItems />
    </Panel>
    <Panel header="Add Items" eventKey="2">
    <AddItems />
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
