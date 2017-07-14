import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'


class DeleteItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:'',
      identifier:'',
      unit_number: '',
      date_packed: '',
      date_stored: '',
      room: '',
      unit_location: '',
      description: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
    this.handleBoxIdentifierChange = this.handleBoxIdentifierChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this)

}




handleSubmit(e) {
  e.preventDefault()
  axios.get(`http://localhost:3000/api/boxes/${this.state.id}`)
    .then(response => {
      console.log(response.data);
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


  handleSubmitDelete(e) {
    e.preventDefault()
    axios.delete(`http://localhost:3000/api/items/${this.state.id}`, this.state)
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          window.location.reload()
        }
      })
      .catch(err => {
        console.error(err)
        alert("Please fill in all required data")
        })
      }

      handleBoxIdChange(e) {
        console.log('string', e.target.value);
        this.setState({
          box_id: e.target.value,
           });
        }

      handleBoxIdentifierChange(e) {
        console.log('string', e.target.value);
        this.setState({
          box_identifier: e.target.value,
         });
      }

      handleNameChange(e) {
        console.log('string', e.target.value);
        this.setState({
          name: e.target.value,
         });
      }

      handleQuantityChange(e) {
        console.log('string', e.target.value);
        this.setState({
          quantity: e.target.value,
         });
      }

      handleValueChange(e) {
        console.log('string', e.target.value);
        this.setState({
          value: e.target.value,
         });
      }

      handleDescriptionChange(e) {
        console.log('string', e.target.value);
        this.setState({
          description: e.target.value,
         });
      }

      handleImageUrlChange(e) {
        console.log('string', e.target.value);
        this.setState({
          image_url: e.target.value,
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
                placeholder="2"
                onChange={this.handleIdChange}
              />
              <FormControl.Feedback />
              <HelpBlock>Enter Box Id </HelpBlock>
              <Button type="submit">
                   Review Info
                 </Button>
            </FormGroup>
          </form>
        </div>
      <div>

    <form onSubmit={this.handleSubmitDelete}>
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
         placeholder={this.state.description}
         onChange={this.handleDescriptionChange}
       />
     </FormGroup>
     <Button type="submit">
          Delete Item
        </Button>
</form>
</div>
</div>
    );
  }
};


export default DeleteItem
