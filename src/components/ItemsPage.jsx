import React, { Component } from 'react'
import { Link } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import CurrentItems from './CurrentItems'
import AddItems from './AddItems'
import Items  from '../images/items.png'
import axios from 'axios'


class ItemsPage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        box: {},
      }
    }

  componentDidMount() {
   //axios.get(`/api/users/${this.props.params.id}`)
   axios.get(`http://localhost:3000/api/boxes/${this.props.location.query.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          box : response.data,
        })
      })
      .catch(err => {
        console.log('error', err);
      })
    }


  render() {
    console.log(this.props);
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
