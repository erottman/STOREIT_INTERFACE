import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import EditItem from './EditItem'



class Item extends Component {
  render() {

    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src="https://images-na.ssl-images-amazon.com/images/I/71-rs5lCeRL._SL256_.jpg" alt="260x260">
          <h3>Toaster Oven</h3>
          <p> New toaster with bagel width </p>
          <p>Quantity: 1</p>
          <p>Value : $32.99 </p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (
  <Accordion>
    <Panel header="Edit Item" eventKey="2">
    <EditItem />
    </Panel>
  </Accordion>
);

  const button = (
    <Button type="submit">
         Delete Item
       </Button>
  )
    return (
      <div>
      <div> {thumbnailInstance}</div>
      <div> {accordionInstance}</div>
        <div> {button}</div>
    </div>
    )
  }
}

export default Item
