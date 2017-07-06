import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'


const Add = React.createClass({
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
    <HelpBlock>No longer than 10 characters</HelpBlock>
  </FormGroup>

  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
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
       <option value="select">select</option>
       <option value="other">...</option>
     </FormControl>
   </FormGroup>

   <FormGroup controlId="formControlsSelect">
      <ControlLabel>Unit Location</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>


   <FormGroup controlId="formControlsTextarea">
   <ControlLabel>Description</ControlLabel>
   <FormControl componentClass="textarea" placeholder="textarea" />
 </FormGroup>
 <Button type="submit">
      Add Box
    </Button>

</form>

    );
  }
});


export default Add
