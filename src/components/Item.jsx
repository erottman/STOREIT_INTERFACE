import React, { Component } from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { HelpBlock, InputGroup, Table, Accordion, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import ItemImg  from '../images/toaster.jpg'
import DeleteItems from './DeleteItems'
import axios from 'axios'
import AUTH_URL from '../config/server.js'


class Item extends Component {
  constructor(props) {
    super(props)
      this.state = {
        id: '',
        box_id: '',
        box_identifier:'',
        name: '',
        quantity:'',
        value:'',
        description: '',
        image_url: '',
      }

      this.handleSubmitPut = this.handleSubmitPut.bind(this)
      this.handleBoxIdChange = this.handleBoxIdChange.bind(this)
      this.handleBoxIdentifierChange = this.handleBoxIdentifierChange.bind(this)
      this.handleNameChange = this.handleNameChange.bind(this)
      this.handleQuantityChange = this.handleQuantityChange.bind(this)
      this.handleValueChange = this.handleValueChange.bind(this)
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
      this.handleImageUrlChange = this.handleImageUrlChange.bind(this)
  }

  componentDidMount() {
   axios.get(`${AUTH_URL}api/items/${this.props.location.query.id}`)
      .then(response => {
        console.log(response);
        this.setState({
          id: response.data.id,
          box_id: response.data.box_id,
          box_identifier: response.data.box_identifier,
          name: response.data.name,
          quantity:response.data.quantity,
          value:response.data.value,
          description: response.data.description,
          image_url: response.data.image_url,
        })
      })
      .catch(err => {
        console.log('error', err);
      })
    }


  handleSubmitPut(e) {
    console.log('put', this.state);
    e.preventDefault()
    axios.put(`${AUTH_URL}api/items/${this.state.id}`, this.state)
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          browserHistory.push('/items?id=' + this.state.box_id)
          // browserHistory.push('/item?id=' + response.data.id)
          // window.location.reload()
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
    const thumbnailInstance = (
    <Grid>
      <Row>
      <Col xs={12} sm={12}>
        <Thumbnail src={this.state.image_url} alt="260x260">
          <h3>{this.state.name}</h3>
          <p> {this.state.description} </p>
          <p>Quantity: {this.state.quantity}</p>
          <p>Value : {this.state.value} </p>
        </Thumbnail>
      </Col>
      </Row>
    </Grid>
  );

  const accordionInstance = (
  <Accordion>
    <Panel header="Edit Item" eventKey="1">

  <form onSubmit={this.handleSubmitPut}>
    <FormGroup
      controlId="formBasicText">
      <ControlLabel>Item Name</ControlLabel>
      <FormControl
        type="text"
        value={this.state.name}
        placeholder={this.state.name}
        onChange={this.handleChange}
      />
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
     <ControlLabel>Quantity</ControlLabel>
     <FormControl
       onChange={this.handleQuantityChange.bind(this)}
       componentClass="select"
       placeholder={this.state.quantity}>
         <option value="-1">{this.state.quantity}</option>
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
     type="text"
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
      Update Item
    </Button>

</form>
    </Panel>
    <Panel header="Delete Item" eventKey="2">
    <DeleteItems id={this.state.id} box_id={this.state.box_id} box_identifier={this.state.box_identifier} name={this.state.name} quantity={this.state.quantity}  value={this.state.value} description={this.state.description}  image_url={this.state.image_url} />
    </Panel>
  </Accordion>
);


    return (
      <div>
      <div> {thumbnailInstance}</div>
      <div> {accordionInstance}</div>
    </div>
    )
  }
}

export default Item
