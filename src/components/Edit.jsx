import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'


const Edit = React.createClass({
  getInitialState() {
    return {
      value: ''
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <form>
  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
  >
    <ControlLabel>Box Identifier</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder="example box2"
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>Click Edit Button to Prefill Info </HelpBlock>
    <Button type="submit">
         Edit Box
       </Button>
    <Button type="submit">
         Delete Box
    </Button>
  </FormGroup>




  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
  >
    <ControlLabel>Unit Number</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
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
     <FormControl type="text" />
   </InputGroup>
 </FormGroup>

 <FormGroup>
  <InputGroup>
    <InputGroup.Button>
      <Button>Stored Date</Button>
    </InputGroup.Button>
    <FormControl type="text" />
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
   <FormControl componentClass="textarea"  />
 </FormGroup>
 <Button type="submit">
      Update Box
    </Button>
    <Button type="submit">
      Delete Box
    </Button>

</form>

    );
  }
});


export default Edit
