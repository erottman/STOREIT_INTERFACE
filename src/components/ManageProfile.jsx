import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class ManageProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
        tenent: {},
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
    this.setState({
      id: nextProps.tenent.id,
      user_id: nextProps.tenent.user_id,
    })
  }


  handleSubmit(e) {
    e.preventDefault()
    axios.put(`${AUTH_URL}api/tenents/${this.state.id}`, this.state.tenent)
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


  handleFirstNameChange(e) {
    this.setState({ tenent : {
      first_name: e.target.value,
      }
     });
  }

  handleLastNameChange(e) {
    this.setState({ tenent : {
      last_name: e.target.value,
      }
     });
  }


  handleAddressLine1Change(e) {
    this.setState({ tenent : {
      address_line_1: e.target.value,
      }
     });
  }

  handleAddressLine2Change(e) {
    this.setState({ tenent : {
      address_line_2: e.target.value,
      }
     });
  }

  handleCityChange(e) {
    this.setState({ tenent : {
      city: e.target.value,
      }
     });
  }

  handleStateChange(e) {
    this.setState({ tenent : {
      state: e.target.value,
      }
     });
  }


  handleZipChange(e) {
    this.setState({ tenent : {
      zip: e.target.value,
      }
     });
  }

  handlePhoneChange(e) {
    this.setState({ tenent : {
      phone_number: e.target.value,
      }
     });
  }

  handleEmailChange(e) {
    this.setState({ tenent : {
      email: e.target.value,
      }
     });
  }

  handleImageUrlChange(e) {
    this.setState({ tenent : {
      image_url: e.target.value,
      }
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
            value={this.state.tenent.first_name}
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
            value={this.state.tenent.last_name}
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
            value={this.state.tenent.address_line_1}
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
            value={this.state.tenent.address_line_2}
            placeholder={this.props.tenent.address_line_2}
            onChange={this.handleAddressLine2Change}
          />
        </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>City </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.tenent.city}
                placeholder={this.props.tenent.city}
                onChange={this.handleCityChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>State </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.tenent.state}
                placeholder={this.props.tenent.state}
                onChange={this.handleStateChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Zip </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.tenent.zip}
                placeholder={this.props.tenent.zip}
                onChange={this.handleZipChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Phone #</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.tenent.phone_number}
                placeholder={this.props.tenent.phone_number}
                onChange={this.handlePhoneChange}
              />
            </InputGroup>
          </FormGroup>


        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Email @</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.tenent.email}
                placeholder={this.props.tenent.email}
                onChange={this.handleEmailChange}
              />
            </InputGroup>
          </FormGroup>


         <FormGroup>
           <InputGroup>
             <InputGroup.Addon>Image Url @</InputGroup.Addon>
             <FormControl type="text"
               value={this.state.tenent.image_url}
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
