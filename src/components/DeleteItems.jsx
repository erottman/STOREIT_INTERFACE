import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class DeleteItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      box_id: '',
      box_identifier: '',
      name: '',
      quantity:'',
      value:'',
      description: '',
      image_url: '',
    }

    this.handleSubmitDelete = this.handleSubmitDelete.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log("next props", nextProps);
    this.setState({
      id: nextProps.id,
      box_id: nextProps.box_id,
      box_identifier: nextProps.box_identifier,
      name: nextProps.name,
      quantity:nextProps.quantity,
      value:nextProps.value,
      description: nextProps.description,
      image_url: nextProps.image_url,
    })
  }

  handleSubmitDelete(e) {
    e.preventDefault()
    axios.delete(`${AUTH_URL}api/items/${this.state.id}`)
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          browserHistory.push('/items?id=' + this.state.box_id)
        }
      })
      .catch(err => {
        console.error(err)
        alert("Please fill in all required data")
        })
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
      <form onSubmit={this.handleSubmitDelete}>

      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Item Name</ControlLabel>
        <FormControl
          type="text"
          value={this.state.name}
          placeholder={this.state.name}
          onChange={this.handleNameChange}/>
      </FormGroup>

      <FormGroup controlId="formControlsSelect">
         <ControlLabel>Quantity</ControlLabel>
         <FormControl
           onChange={this.handleQuantityChange.bind(this)}
           componentClass="select"
           placeholder="1">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
           <option value="11">11</option>
           <option value="12">12</option>
           <option value="13">13</option>
           <option value="14">14</option>
            <option value="15">15</option>
         </FormControl>
       </FormGroup>

     <FormGroup>
        <InputGroup>
          <InputGroup.Addon>Value $</InputGroup.Addon>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder={this.state.value}
            onChange={this.handleValueChange}
          />
          <InputGroup.Addon>.00</InputGroup.Addon>
        </InputGroup>
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


       <FormGroup>
         <InputGroup>
           <InputGroup.Addon>Image Url @</InputGroup.Addon>
            <FormControl
              type="text"
              value={this.state.image_url}
              placeholder={this.state.image_url}
              onChange={this.handleImageUrlChange}
           />
         </InputGroup>
       </FormGroup>

     <Button type="submit">
          Delete Item
        </Button>

    </form>
    );
  }
};


export default DeleteItems
