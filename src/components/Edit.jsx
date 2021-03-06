import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'
import AUTH_URL from '../config/server.js'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:2,
      identifier:'',
      unit_number: '',
      date_packed: '',
      date_stored: '',
      room: '',
      unit_location: '',
      description: '',
    }

  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleSubmitPut = this.handleSubmitPut.bind(this)
  this.handleIdChange = this.handleIdChange.bind(this)
  this.handleIdentifierChange = this.handleIdentifierChange.bind(this)
  this.handleUnitChange = this.handleUnitChange.bind(this)
  this.handlePackedChange = this.handlePackedChange.bind(this)
  this.handleStoredChange = this.handleStoredChange.bind(this)
  this.handleRoomChange = this.handleRoomChange.bind(this)
  this.handleLocationChange = this.handleLocationChange.bind(this)
  this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
}


handleSubmit(e) {
  e.preventDefault()
  axios.get(`${AUTH_URL}api/boxes/${this.state.id}`)
    .then(response => {
      console.log('does this work',response.data);
      this.setState({
        identifier: response.data.identifier,
        unit_number: response.data.unit_number,
        date_packed: response.data.date_packed,
        date_stored: response.data.date_stored,
        room: response.data.room,
        unit_location: response.data.unit_location,
        description: response.data.description,
      })
    })
    .catch(err => {
    })
  }


  handleSubmitPut(e) {
    e.preventDefault()
    axios.put(`${AUTH_URL}api/boxes/${this.state.id}`, this.state)
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          this.props.updateBoxes()
          // window.location.reload()
        }
      })
      .catch(err => {
        console.error(err)
        alert("Please fill in all required data")
        })
      }


    handleIdChange(e) {
      this.setState({
        id: e.target.value,
       });
    }


  handleIdentifierChange(e) {
    this.setState({
      identifier: e.target.value,
     });
  }

  handleUnitChange(e) {
    this.setState({
      unit_number: e.target.value,
     });
  }

  handlePackedChange(e) {
    this.setState({
      date_packed: e.target.value,
     });
  }

  handleStoredChange(e) {
    this.setState({
      date_stored: e.target.value,
     });
  }

  handleRoomChange(e) {
    this.setState({
      room: e.target.value,
     });
  }

  handleLocationChange(e) {
    this.setState({
      unit_location: e.target.value,
     });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
     });
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <FormGroup
              controlId="formBasicText"
              >
              <ControlLabel>Box Id</ControlLabel>
              <FormControl
                type="text"
                value={this.state.id}
                placeholder={this.state.id}
                onChange={this.handleIdChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Click Edit Button to Prefill Info </HelpBlock>
              <Button type="submit">
                   Edit Box
                 </Button>
            </FormGroup>
          </form>
        </div>
      <div>

    <form onSubmit={this.handleSubmitPut}>
      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Box Identifier</ControlLabel>
        <FormControl
          type="text"
          value={this.state.identifier}
          placeholder={this.state.identifier}
          onChange={this.handleIdentifierChange}
        />
      </FormGroup>

      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Unit Number</ControlLabel>
        <FormControl
          type="text"
          value={this.state.unit_number}
          placeholder={this.state.unit_number}
          onChange={this.handleUnitChange}
        />
        <FormControl.Feedback />
        <HelpBlock>Please enter number only</HelpBlock>
      </FormGroup>

      <FormGroup>
       <InputGroup>
         <InputGroup.Button>
           <Button>Packed Date</Button>
         </InputGroup.Button>
         <FormControl
           type="text"
           value={this.state.date_packed}
           placeholder={this.state.date_packed}
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
          placeholder={this.state.date_stored}
          onChange={this.handleStoredChange}
        />
      </InputGroup>
     </FormGroup>

      <FormGroup controlId="formControlsSelect">
         <ControlLabel>Room</ControlLabel>
         <FormControl
           onChange={this.handleRoomChange.bind(this)}
           componentClass="select"
           placeholder={this.state.room}>
           <option value="select">{this.state.room}</option>
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
            <option value="select">{this.state.unit_location}</option>
            <option value="Front Left">Front Left</option>
            <option value="Front Center">Front Center</option>
            <option value="Front Right">Front Right</option>
            <option value="Middle Left">Middle Left</option>
            <option value="Middle Center">Middle Center</option>
            <option value="Middle Right">Middle Right</option>
            <option value="Back Left">Back Left</option>
            <option value="Back Center">Back Center</option>
            <option value="Back Right">Back Right</option>
          </FormControl>
        </FormGroup>


       <FormGroup controlId="formControlsTextarea">
       <ControlLabel>Description</ControlLabel>
       <FormControl
         componentClass="textarea"
         value={this.state.description}
         placeholder={this.state.description}
         onChange={this.handleDescriptionChange}
       />
     </FormGroup>
     <Button type="submit">
          Update Box
        </Button>
</form>
</div>
</div>
    );
  }
};


export default Edit
