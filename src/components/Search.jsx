import React, { Component } from 'react'
import { Link } from 'react-router'
import { HelpBlock, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'


const Search = React.createClass({
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
          <ControlLabel>Search for a Box Identifier </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="box2"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>No longer than 10 characters</HelpBlock>
        </FormGroup>

        <Button type="submit">
          Submit
        </Button>
      </form>
    );
  }
});


export default Search
