import React, { Component } from 'react'
import { Link } from 'react-router'
import { Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'


class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box: {},
      values: {
        identifier:'',
        unit_number: '',
        date_packed: '',
        date_stored: '',
        room: '',
        unit_location: '',
        description: '',
    }
  }
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleSubmitPut = this.handleSubmitPut.bind(this)
  this.handleUnitChange = this.handleUnitChange.bind(this)
  this.handlePackedChange = this.handlePackedChange.bind(this)
  this.handleStoredChange = this.handleStoredChange.bind(this)
}


handleSubmit(e) {
  e.preventDefault()
  axios.get('http://localhost:3000/api/boxes/2')
    .then(response => {
      console.log(response.data);
      this.setState({
        box: response.data,
      })
    })
    .catch(err => {
    })
  }

  componentDidMount() {
   //axios.get(`/api/users/${this.props.params.id}`)
   axios.get('http://localhost:3000/api/boxes/2')
      .then(response => {
        console.log(response.data);
        this.setState({
          box : response.data,
        })
      })
      .catch(err => {
      })
    }


  handleSubmitPut(e) {
    e.preventDefault()
    axios.get('http://localhost:3000/api/boxes/2')
      .then(response => {
        console.log(response.data);
        this.setState({
          box: response.data,
        })
      })
      .catch(err => {
      })
    }

  handleUnitChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      unit_number: e.target.value,
      }
     });
  }

  handlePackedChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      date_packed: e.target.value,
      }
     });
  }

  handleStoredChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      date_stored: e.target.value,
      }
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
              <ControlLabel>Box Identifier</ControlLabel>
              <FormControl
                type="text"
                value={this.state.values.identifier}
                placeholder="example box2"
                onChange={this.handleChange}
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
        <ControlLabel>Unit Number</ControlLabel>
        <FormControl
          type="text"
          value={this.state.values.unit_number}
          placeholder={this.state.box.unit_number}
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
           value={this.state.values.date_packed}
           placeholder={this.state.box.date_packed}
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
          value={this.state.values.date_stored}
          placeholder={this.state.box.date_stored}
          onChange={this.handleStoredChange}
        />
      </InputGroup>
     </FormGroup>

      <FormGroup controlId="formControlsSelect">
         <ControlLabel>Room</ControlLabel>
         <FormControl
           componentClass="select"
           placeholder={this.state.box.room}>
           <option value="select">{this.state.box.room}</option>
           <option value={this.state.values.room}>Living Room</option>
           <option value={this.state.values.room}>Kitchen</option>
           <option value={this.state.values.room}>Dining Room</option>
           <option value={this.state.values.room}>Master Bedroom</option>
           <option value={this.state.values.room}>Second Bedroom</option>
           <option value={this.state.values.room}>Bathroom</option>
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
</div>
</div>
    );
  }
};


export default Edit
