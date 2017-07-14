import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'


class ManageProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        id:'',
        user_id:'',
        first_name: '',
        last_name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        state: '',
        zip: '',
        phone_number: '',
        email: '',
        image_url: '',
      }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleAddressLine1Change = this.handleAddressLine1Change.bind(this)
    this.handleAddressLine2Change = this.handleAddressLine2Change.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleZipChange = this.handleZipChange.bind(this)
    this.handlePhoneChange = this.handlePhoneChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props", nextProps);
    this.setState({
      id: nextProps.tenent.id,
      user_id: nextProps.tenent.user_id,
    })
  }


  handleSubmit(e) {
    e.preventDefault()
    console.log('look Here', this.state);
    axios.put(`http://localhost:3000/api/tenents/${this.state.id}`, this.state)
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


  // componentDidMount() {
  //  //axios.get(`/api/users/${this.props.params.id}`)
  //  axios.get('http://localhost:3000/api/tenents/2')
  //     .then(response => {
  //       this.setState({
  //         tenent : response.data,
  //       })
  //
  //     })
  //     .catch(err => {
  //     })
  //   }



  handleFirstNameChange(e) {
    console.log('string', e.target.value);
    this.setState({
      first_name: e.target.value,
     });
  }

  handleLastNameChange(e) {
    console.log('string', e.target.value);
    this.setState({
      last_name: e.target.value,
     });
  }


  handleAddressLine1Change(e) {
    console.log('string', e.target.value);
    this.setState({
      address_line_1: e.target.value,
     });
  }

  handleAddressLine2Change(e) {
    console.log('string', e.target.value);
    this.setState({
      address_line_2: e.target.value,
     });
  }

  handleCityChange(e) {
    console.log('string', e.target.value);
    this.setState({
      city: e.target.value,
     });
  }

  handleStateChange(e) {
    console.log('string', e.target.value);
    this.setState({
      state: e.target.value,
     });
  }


  handleZipChange(e) {
    console.log('string', e.target.value);
    this.setState({
      zip: e.target.value,
     });
  }

  handlePhoneChange(e) {
    console.log('string', e.target.value);
    this.setState({
      phone_number: e.target.value,
     });
  }

  handleEmailChange(e) {
    console.log('string', e.target.value);
    this.setState({
      email: e.target.value,
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
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.first_name}
            placeholder={this.props.tenent.first_name}
            onChange={this.handleFirstNameChange}
          />
        </FormGroup>

         <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.last_name}
            placeholder={this.props.tenent.last_name}
            onChange={this.handleLastNameChange.bind(this)}
          />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Address Line 1</ControlLabel>
          <FormControl
            type="text"
            value={this.state.address_line_1}
            placeholder={this.props.tenent.address_line_1}
            onChange={this.handleAddressLine1Change}
          />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Address Line 2</ControlLabel>
          <FormControl
            type="text"
            value={this.state.address_line_2}
            placeholder={this.props.tenent.address_line_2}
            onChange={this.handleAddressLine2Change}
          />
        </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>City </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.city}
                placeholder={this.props.tenent.city}
                onChange={this.handleCityChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>State </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.state}
                placeholder={this.props.tenent.state}
                onChange={this.handleStateChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Zip </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.zip}
                placeholder={this.props.tenent.zip}
                onChange={this.handleZipChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Phone #</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.phone_number}
                placeholder={this.props.tenent.phone_number}
                onChange={this.handlePhoneChange}
              />
            </InputGroup>
          </FormGroup>


        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Email @</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.email}
                placeholder={this.props.tenent.email}
                onChange={this.handleEmailChange}
              />
            </InputGroup>
          </FormGroup>


         <FormGroup>
           <InputGroup>
             <InputGroup.Addon>Image Url @</InputGroup.Addon>
             <FormControl type="text"
               value={this.state.image_url}
               placeholder={this.props.tenent.image_url}
               onChange={this.handleImageUrlChange}
             />
           </InputGroup>
         </FormGroup>

       <Button type="submit">
            Update Profile
          </Button>
      </form>

    );
  }
};


export default ManageProfile
