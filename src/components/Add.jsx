import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'


class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
        identifier:'',
        unit_number: '',
        date_packed: '',
        date_stored: '',
        room: '',
        unit_location: '',
        description: '',

  }
    this.handleSubmitPost = this.handleSubmitPost.bind(this)
    this.handleIdentifierChange = this.handleIdentifierChange.bind(this)
    this.handleUnitChange = this.handleUnitChange.bind(this)
    this.handlePackedChange = this.handlePackedChange.bind(this)
    this.handleStoredChange = this.handleStoredChange.bind(this)
    this.handleRoomChange = this.handleRoomChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
  }

  handleSubmitPost(e) {
    e.preventDefault()

    axios.post('http://localhost:3000/api/boxes', this.state)
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          console.log('kittnes',response.data);
          browserHistory.push('/items?id=' + response.data.id)

        }
      })
      .catch(err => {
        console.error(err)
        alert("Please fill in all required data")
        })
    }


  handleIdentifierChange(e) {
    console.log('string', e.target.value);
    this.setState({
      identifier: e.target.value,
     });
  }

  handleUnitChange(e) {
    console.log('string', e.target.value);
    this.setState({
      unit_number: e.target.value,
     });
  }

  handlePackedChange(e) {
    console.log('string', e.target.value);
    this.setState({
      date_packed: e.target.value,
     });
  }

  handleStoredChange(e) {
    console.log('string', e.target.value);
    this.setState({
      date_stored: e.target.value,
     });
  }

  handleRoomChange(e) {
    console.log('string', e.target.value);
    this.setState({
      room: e.target.value,
     });
  }

  handleLocationChange(e) {
    console.log('string', e.target.value);
    this.setState({
      unit_location: e.target.value,
     });
  }

  handleDescriptionChange(e) {
    console.log('string', e.target.value);
    this.setState({
      description: e.target.value,
     });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmitPost}>
        <FormGroup
          controlId="formBasicText"
          >
          <ControlLabel>Box Identifier</ControlLabel>
          <FormControl
            type="text"
            value={this.state.identifier}
            placeholder="example box2"
            onChange={this.handleIdentifierChange}
          />
        </FormGroup>

      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Unit Number</ControlLabel>
        <FormControl
          type="text"
          value={this.state.unit_number}
          placeholder="444"
          onChange={this.handleUnitChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Please enter numbers only</HelpBlock>
      </FormGroup>

      <FormGroup>
       <InputGroup>
         <InputGroup.Button>
           <Button>Packed Date</Button>
         </InputGroup.Button>
         <FormControl
           type="text"
           value={this.state.date_packed}
           placeholder="05-05-17"
           onChange={this.handlePackedChange}
         />
       </InputGroup>
     </FormGroup>

     <FormGroup>
      <InputGroup>
        <InputGroup.Button>
          <Button>Stored Date</Button>
        </InputGroup.Button>
        <FormControl
          type="text"
          value={this.state.date_stored}
          placeholder="05-10-17"
          onChange={this.handleStoredChange}
        />
      </InputGroup>
     </FormGroup>

      <FormGroup controlId="formControlsSelect">
         <ControlLabel>Room</ControlLabel>
         <FormControl
           onChange={this.handleRoomChange.bind(this)}
           componentClass="select"
           placeholder="Select">
           <option value="select">Select</option>
           <option value="Living Room">Living Room</option>
           <option value="Kitchen">Kitchen</option>
           <option value="Dining Room">Dining Room</option>
           <option value="Master Bedroom">Master Bedroom</option>
           <option value="Second Bedroom">Second Bedroom</option>
           <option value="Bathroom">Bathroom</option>
         </FormControl>
       </FormGroup>

       <FormGroup controlId="formControlsSelect">
          <ControlLabel>Unit Location</ControlLabel>
          <FormControl
            onChange={this.handleLocationChange.bind(this)}
            componentClass="select"
            placeholder="select">
            <option value="select">Select</option>
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
       <FormControl
         componentClass="textarea"
         value={this.state.description}
         placeholder="Add a helpful description of the items going into the box"
         onChange={this.handleDescriptionChange}
       />
     </FormGroup>
     <Button type="submit">
          Add Box
        </Button>
</form>


    );
  }
};


export default Add
