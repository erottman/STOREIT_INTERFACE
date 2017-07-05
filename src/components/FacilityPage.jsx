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
          <p>Public storage in West Seattle with 100 units and car storage.  Provides onsite management, and 24 hour gate access. Climate controlled units available</p>
          <p>2964 SW Avalon Way</p>
          <p>Seattle, WA 98126</p>
          <p>12063952993</p>
          <a href="https://www.publicstorage.com/washington/self-storage-seattle-wa/98126-self-storage/">Website</a>
          <p>
            <Button bsStyle="primary">Manage Storage</Button>&nbsp;
            <Button bsStyle="default">Back</Button>
          </p>
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
