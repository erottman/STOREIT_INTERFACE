import React, { Component } from 'react'
import { Link } from 'react-router'
import { ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'


class FacilityPage extends Component {
  render() {

    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} md={4}>
        <Thumbnail src="https://logo.clearbit.com/publicstorage.com" alt="242x200">
          <h3>West Seattle Public Storage</h3>
          <p>Public Storage is the leading provider of storage units for your personal, business and vehicle needs with thousands of locations nationwide. We offer a wide variety of units and sizes available with no obligation, no long-term commitment and no credit card required. Call today at 1-800-688-8057 for a free reservation and get your first month for just $1.</p>
          <p>2964 SW Avalon Way</p>
          <p>Seattle, WA 98126</p>
          <p>12063952993</p>
          <a href="https://www.publicstorage.com/washington/self-storage-seattle-wa/98126-self-storage/">Website</a>
          <p><Button bsStyle="primary">Manage Storage</Button>&nbsp;</p>
          <p><Button bsStyle="primary">View Facilities</Button>&nbsp;</p>
          <p><Button bsStyle="default">Back</Button></p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );


    return (
      <div> {thumbnailInstance}</div>

    )
  }
}

export default FacilityPage
