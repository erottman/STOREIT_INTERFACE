import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl,PanelGroup } from 'react-bootstrap'
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
        activeKey: "0",
      }
      this.updateTenent = this.updateTenent.bind(this)
      this.handleSelect = this.handleSelect.bind(this)
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
      tenent: tenant,
      activeKey: "0",
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


  handleSelect(activeKey) {
    this.setState({activeKey})
  }

  render() {

    const profilebutton = (
      <button>
      <p><Link className="boxes" to="/boxes"><Button className="profilebutton">Manage Storage</Button>&nbsp;</Link></p>
      </button>
  );

    const profileOverview = (
      <ListGroup className="profileOverview">
        <Link className="facility" to="/facility"><ListGroupItem>{this.state.facility.name} </ListGroupItem></Link>
        <Link className="boxes" to="/boxes"><ListGroupItem>Storage Unit: {this.state.unit.unit_number}  |   Total Boxes:  {this.state.boxes.length} </ListGroupItem></Link>
        <Link className="boxes" to="/boxes"><ListGroupItem>Total Items: {this.getTotalQuantity(this.state.items)}     |   Total Value: ${this.getTotalValue(this.state.items)}</ListGroupItem></Link>
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
    <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
      <Panel header="Manage Profile" eventKey="1">
      <ManageProfile updateTenent={this.updateTenent} tenent={this.state.tenent} />
      </Panel>
    </PanelGroup>
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
