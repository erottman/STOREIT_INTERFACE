import React, { Component } from 'react'
import { Link } from 'react-router'
import { Addon, Checkbox, Form, inline, HelpBlock, InputGroup, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class AddItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box_id: '',
      box_identifier: '',
      name: 'Richard Sherman Signed Football',
      quantity: 1,
      value: 3000,
      description: 'Signed in 2014 at the Cardinals Game when we won by 30 points',
      image_url: 'https://images.pristineauction.com/21/210340/main_1-Richard-Sherman-Signed-Football-JSA-COA-PristineAuction.com.jpg',
    }
    this.handleSubmitPost = this.handleSubmitPost.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleQuantityChange = this.handleQuantityChange.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      box_id: nextProps.box.id,
      box_identifier: nextProps.box.identifier,
    })
  }

  handleSubmitPost(e) {
    e.preventDefault()
    axios.post(`${AUTH_URL}api/items`, this.state)
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          this.props.updateItems()
          // window.location.reload()
        }
      })
      .catch(err => {
        console.error(err)
        alert("Please fill in all required data")
        })
    }


  handleNameChange(e) {
    this.setState({
      name: e.target.value,
     });
  }

  handleQuantityChange(e) {
    this.setState({
      quantity: e.target.value,
     });
  }

  handleValueChange(e) {
    this.setState({
      value: e.target.value,
     });
  }

  handleDescriptionChange(e) {
    this.setState({
      description: e.target.value,
     });
  }

  handleImageUrlChange(e) {
    this.setState({
      image_url: e.target.value,
     });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmitPost}>

      <FormGroup
        controlId="formBasicText">
        <ControlLabel>Item Name</ControlLabel>
        <FormControl
          type="text"
          value={this.state.name}
          placeholder="wine glasses"
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
            placeholder="9.99"
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
         placeholder="description of items to be packed in this box"
         onChange={this.handleDescriptionChange}
       />
     </FormGroup>


       <FormGroup>
         <InputGroup>
           <InputGroup.Addon>Image Url @</InputGroup.Addon>
            <FormControl
              type="text"
              value={this.state.image_url}
              placeholder="image@google.com"
              onChange={this.handleImageUrlChange}
           />
         </InputGroup>
       </FormGroup>

     <Button type="submit">
          Add Items
        </Button>

    </form>

    );
  }
};


export default AddItems
