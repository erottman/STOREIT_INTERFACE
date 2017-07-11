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
  axios.get('http://localhost:3000/api/boxes/1')
    .then(response => {
      console.log(response.data);
      this.setState({
        box: response.data,
      })
    })
    .catch(err => {
    })
  }


  handleSubmitPut(e) {
    e.preventDefault()
    axios.put('http://localhost:3000/api/boxes/1', this.state.values)
      .then(response => {
        console.log(response.data);
        this.setState({
          box: response.data,
        })
      })
  }


    handleIdChange(e) {
      console.log('string', e.target.value);
      this.setState({values: {
        id: e.target.value,
        }
       });
    }


  handleIdentifierChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      identifier: e.target.value,
      }
     });
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

  handleRoomChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      room: e.target.value,
      }
     });
  }

  handleLocationChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      unit_location: e.target.value,
      }
     });
  }

  handleDescriptionChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      description: e.target.value,
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
              <ControlLabel>Box Id</ControlLabel>
              <FormControl
                type="text"
                value={this.state.values.id}
                placeholder="example box2"
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
           onChange={this.handleRoomChange}
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
          <FormControl
            onChange={this.handleLocationChange}
            componentClass="select"
            placeholder="select">
            <option value="select">{this.state.box.unit_location}</option>
            <option value={this.state.values.unit_location}>Front Left</option>
            <option value={this.state.values.unit_location}>Front Center</option>
            <option value={this.state.values.unit_location}>Front Right</option>
            <option value={this.state.values.unit_location}>Middle Left</option>
            <option value={this.state.values.unit_location}>Middle Center</option>
            <option value={this.state.values.unit_location}>Middle Right</option>
            <option value={this.state.values.unit_location}>Back Left</option>
            <option value={this.state.values.unit_location}>Back Center</option>
            <option value={this.state.values.unit_location}>Back Right</option>
          </FormControl>
        </FormGroup>


       <FormGroup controlId="formControlsTextarea">
       <ControlLabel>Description</ControlLabel>
       <FormControl
         componentClass="textarea"
         value={this.state.values.description}
         placeholder={this.state.box.description}
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
