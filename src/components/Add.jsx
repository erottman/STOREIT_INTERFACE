import React, { Component } from 'react'
import { Link } from 'react-router'
import { HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
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
          <ControlLabel>Add a Box </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter Box Number"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>No longer than 10 characters</HelpBlock>
        </FormGroup>

        <FormGroup>
  <InputGroup>
    <InputGroup.Addon>@</InputGroup.Addon>
    <FormControl type="text" />
  </InputGroup>
</FormGroup>
<FormGroup>
  <InputGroup>
    <FormControl type="text" />
    <InputGroup.Addon>.00</InputGroup.Addon>
  </InputGroup>
</FormGroup>
<FormGroup>
  <InputGroup>
    <InputGroup.Addon>$</InputGroup.Addon>
    <FormControl type="text" />
    <InputGroup.Addon>.00</InputGroup.Addon>
  </InputGroup>
</FormGroup>
      </form>
    );
  }
});


export default Add
