import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'


class ManageProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tenent: [],
      value: '',
    }
  }

  componentWillMount() {
   //axios.get(`/api/users/${this.props.params.id}`)
   axios.get('http://localhost:3000/api/tenents/2')
      .then(response => {
        this.setState({
          tenent : response.data[0],
        })
      })
      .catch(err => {
      })
    }


  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>

  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
  >
    <ControlLabel>First Name</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder={this.state.tenent.first_name}
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>No longer than 10 Characters</HelpBlock>
  </FormGroup>

  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
  >
    <ControlLabel>Last Name</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder={this.state.tenent.last_name}
      onChange={this.handleChange}
    />
    <FormControl.Feedback />
    <HelpBlock>No longer than 10 Characters</HelpBlock>
  </FormGroup>

  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
  >
    <ControlLabel>Address Line 1</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder={this.state.tenent.address_line_1}
      onChange={this.handleChange}
    />
  </FormGroup>

  <FormGroup
    controlId="formBasicText"
    validationState={this.getValidationState()}
  >
    <ControlLabel>Address Line 2</ControlLabel>
    <FormControl
      type="text"
      value={this.state.value}
      placeholder={this.state.tenent.address_line_2}
      onChange={this.handleChange}
    />
  </FormGroup>

  <FormGroup>
      <InputGroup>
        <InputGroup.Addon>City </InputGroup.Addon>
        <FormControl type="text"
          value={this.state.value}
          placeholder={this.state.tenent.city}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>

  <FormGroup>
      <InputGroup>
        <InputGroup.Addon>State </InputGroup.Addon>
        <FormControl type="text"
          value={this.state.value}
          placeholder={this.state.tenent.state}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>

  <FormGroup>
      <InputGroup>
        <InputGroup.Addon>Zip </InputGroup.Addon>
        <FormControl type="text"
          value={this.state.value}
          placeholder={this.state.tenent.zip}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>

  <FormGroup>
      <InputGroup>
        <InputGroup.Addon>Phone #</InputGroup.Addon>
        <FormControl type="text"
          value={this.state.value}
          placeholder={this.state.tenent.phone_number}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>


  <FormGroup>
      <InputGroup>
        <InputGroup.Addon>Email @</InputGroup.Addon>
        <FormControl type="text"
          value={this.state.value}
          placeholder={this.state.tenent.email}
          onChange={this.handleChange}
        />
      </InputGroup>
    </FormGroup>






   <FormGroup>
     <InputGroup>
       <InputGroup.Addon>Image Url @</InputGroup.Addon>
       <FormControl type="text"
         value={this.state.value}
         placeholder={this.state.tenent.image_url}
         onChange={this.handleChange}
       />
     </InputGroup>
   </FormGroup>

 <Button type="submit">
      Edit Item
    </Button>

</form>

    );
  }
};


export default ManageProfile
