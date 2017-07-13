import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import EditItem from './EditItem'
import ItemImg  from '../images/toaster.jpg'
import axios from 'axios'



class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {},
    }
  }

  componentDidMount() {
   axios.get(`http://localhost:3000/api/items/${this.props.location.query.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          item : response.data,
        })
      })
      .catch(err => {
        console.log('error', err);
      })
    }



  render() {
    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src={ItemImg} alt="260x260">
          <h3>{this.state.item.name}</h3>
          <p> {this.state.item.description} </p>
          <p>Quantity: {this.state.item.quantity}</p>
          <p>Value : {this.state.item.value} </p>
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
