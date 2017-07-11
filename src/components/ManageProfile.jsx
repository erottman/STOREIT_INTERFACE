import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'


class ManageProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tenent: {},
      values: {
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

  handleSubmit(e) {
    e.preventDefault()
    axios.put('http://localhost:3000/api/tenents/2', this.state.values)
      .then(response => {
        console.log(response.data);
        this.setState({
          tenent: response.data,
        })
      })
  }

  componentDidMount() {
   //axios.get(`/api/users/${this.props.params.id}`)
   axios.get('http://localhost:3000/api/tenents/2')
      .then(response => {
        this.setState({
          tenent : response.data,
        })

      })
      .catch(err => {
      })
    }



  handleFirstNameChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      first_name: e.target.value,
      }
     });
  }

  handleLastNameChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      last_name: e.target.value,
      }
     });
  }


  handleAddressLine1Change(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      address_line_1: e.target.value,
      }
     });
  }

  handleAddressLine2Change(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      address_line_2: e.target.value,
      }
     });
  }

  handleCityChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      city: e.target.value,
      }
     });
  }

  handleStateChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      state: e.target.value,
      }
     });
  }


  handleZipChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      zip: e.target.value,
      }
     });
  }

  handlePhoneChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      phone_number: e.target.value,
      }
     });
  }

  handleEmailChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
      email: e.target.value,
      }
     });
  }

  handleImageUrlChange(e) {
    console.log('string', e.target.value);
    this.setState({values: {
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
            value={this.state.values.first_name}
            placeholder={this.state.tenent.first_name}
            onChange={this.handleFirstNameChange}
          />
          <FormControl.Feedback />
          <HelpBlock>No longer than 10 Characters</HelpBlock>
        </FormGroup>

         <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.values.last_name}
            placeholder={this.state.tenent.last_name}
            onChange={this.handleLastNameChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>No longer than 10 Characters</HelpBlock>
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Address Line 1</ControlLabel>
          <FormControl
            type="text"
            value={this.state.values.address_line_1}
            placeholder={this.state.tenent.address_line_1}
            onChange={this.handleAddressLine1Change}
          />
        </FormGroup>

        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Address Line 2</ControlLabel>
          <FormControl
            type="text"
            value={this.state.values.address_line_2}
            placeholder={this.state.tenent.address_line_2}
            onChange={this.handleAddressLine2Change}
          />
        </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>City </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.values.city}
                placeholder={this.state.tenent.city}
                onChange={this.handleCityChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>State </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.values.state}
                placeholder={this.state.tenent.state}
                onChange={this.handleStateChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Zip </InputGroup.Addon>
              <FormControl type="text"
                value={this.state.values.zip}
                placeholder={this.state.tenent.zip}
                onChange={this.handleZipChange}
              />
            </InputGroup>
          </FormGroup>

        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Phone #</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.values.phone_number}
                placeholder={this.state.tenent.phone_number}
                onChange={this.handlePhoneChange}
              />
            </InputGroup>
          </FormGroup>


        <FormGroup>
            <InputGroup>
              <InputGroup.Addon>Email @</InputGroup.Addon>
              <FormControl type="text"
                value={this.state.values.email}
                placeholder={this.state.tenent.email}
                onChange={this.handleEmailChange}
              />
            </InputGroup>
          </FormGroup>


         <FormGroup>
           <InputGroup>
             <InputGroup.Addon>Image Url @</InputGroup.Addon>
             <FormControl type="text"
               value={this.state.values.image_url}
               placeholder={this.state.tenent.image_url}
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
