import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'


class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: {
        id:'',
        identifier:'',
        unit_number: '',
        date_packed: '',
        date_stored: '',
        room: '',
        unit_location: '',
        description: '',
    }
  }
    this.handleSubmitPost = this.handleSubmitPost.bind(this)
  }

  handleSubmitPost(e) {
    e.preventDefault()
    axios.post('http://localhost:3000/api/boxes', this.state.values)
      .then(response => {
        console.log(response.data);
        this.setState({
          box: response.data,
        })
      });
  }



  render() {
    return (
      <form>
  <FormGroup
    controlId="formBasicText"

  >
    <ControlLabel>Box Identifier</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder="example box2"
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>No longer than 10 characters</HelpBlock>
  </FormGroup>

  <FormGroup
    controlId="formBasicText"

  >
    <ControlLabel>Unit Number</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder="example 203"
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>Please enter number only</HelpBlock>
  </FormGroup>

  <FormGroup>
   <InputGroup>
     <InputGroup.Button>
       <Button>Packed Date</Button>
     </InputGroup.Button>
     <FormControl type="text" placeholder="05-01-17" />
   </InputGroup>
 </FormGroup>

 <FormGroup>
  <InputGroup>
    <InputGroup.Button>
      <Button>Stored Date</Button>
    </InputGroup.Button>
    <FormControl type="text" placeholder="05-05-17"/>
  </InputGroup>
 </FormGroup>

  <FormGroup controlId="formControlsSelect">
     <ControlLabel>Room</ControlLabel>
     <FormControl componentClass="select" placeholder="select">
       <option value="select">Select Room</option>
       <option value="living_room">Living Room</option>
       <option value="kitchen">Kitchen</option>
       <option value="dining">Dining Room</option>
       <option value="master_bedroom">Master Bedroom</option>
       <option value="second_bedroom">Second Bedroom</option>
       <option value="bathroom">Bathroom</option>
     </FormControl>
   </FormGroup>

   <FormGroup controlId="formControlsSelect">
      <ControlLabel>Unit Location</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">Select Location</option>
        <option value="front_left">Front Left</option>
        <option value="front_center">Front Center</option>
        <option value="front_right">Front Right</option>
        <option value="middle_left">Middle Left</option>
        <option value="middle_center">Middle Center</option>
        <option value="middle_right">Middle Right</option>
        <option value="back_left">Back Left</option>
        <option value="back_center">Back Center</option>
        <option value="back_right">Back Right</option>
      </FormControl>
    </FormGroup>


   <FormGroup controlId="formControlsTextarea">
   <ControlLabel>Description</ControlLabel>
   <FormControl componentClass="textarea" placeholder="description of items to be packed in this box" />
 </FormGroup>
 <Button type="submit">
      Add Items
    </Button>

</form>

    );
  }
};


export default Add
