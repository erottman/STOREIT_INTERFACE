import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'


const ManageProfile = React.createClass({
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
    <ControlLabel>Item Name</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder="example 203"
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>Please enter number only</HelpBlock>
  </FormGroup>

  <FormGroup controlId="formControlsSelect">
     <ControlLabel>Quantity</ControlLabel>
     <FormControl componentClass="select" placeholder="select">
       <option value="one">1</option>
       <option value="two">2</option>
       <option value="three">3</option>
       <option value="four">4</option>
       <option value="five">5</option>
       <option value="six">6</option>
       <option value="seven">7</option>
       <option value="eight">8</option>
       <option value="nine">9</option>
       <option value="ten">10</option>
       <option value="eleven">11</option>
       <option value="twelve">12</option>
       <option value="thirteen">13</option>
       <option value="fourteen">14</option>
        <option value="fifeteen">15</option>
     </FormControl>
   </FormGroup>

 <FormGroup>
    <InputGroup>
      <InputGroup.Addon>Value $</InputGroup.Addon>
      <FormControl type="text" />
      <InputGroup.Addon>.00</InputGroup.Addon>
    </InputGroup>
  </FormGroup>


   <FormGroup controlId="formControlsTextarea">
   <ControlLabel>Description</ControlLabel>
   <FormControl componentClass="textarea" placeholder="description of items to be packed in this box" />
 </FormGroup>


   <FormGroup>
     <InputGroup>
       <InputGroup.Addon>Image Url @</InputGroup.Addon>
       <FormControl type="text" />
     </InputGroup>
   </FormGroup>

 <Button type="submit">
      Edit Item
    </Button>

</form>

    );
  }
});


export default ManageProfile
