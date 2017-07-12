import React, { Component } from 'react'
import { Link } from 'react-router'
import { HelpBlock, ListGroup, ListGroupItem, Panel, Image, DropdownButton, Grid, Row, Col, Thumbnail, Button,FormGroup , ControlLabel, FormControl } from 'react-bootstrap'
import '../App.css'
import { browserHistory } from 'react-router'
import axios from 'axios'


class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      box: {},
      id:'',
    }
    this.handleSubmitGet = this.handleSubmitGet.bind(this)
    this.handleIdChange = this.handleIdChange.bind(this)
  }

  handleSubmitGet(event) {
    event.preventDefault()

    const id = {
      id: this.state.id,
    }

    axios.get('http://localhost:3000/api/boxes/', id )
    .then(response => {
      if (response.data.error){
        console.log(id);
        alert("Box does not exist")
      } else {
        this.setState({
          box : response.data,
        })
          browserHistory.push('/items')
      }
  })
    .catch(err => {
      console.error(err)
      alert("Box does not exist")
      })
  }


  handleIdChange(e) {
    console.log('string', e.target.value);
    this.setState({
      id: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmitGet}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Box Id </ControlLabel>
          <FormControl
            type="text"
            value={this.state.id}
            placeholder="3"
            onChange={this.handleIdChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Numbers Only</HelpBlock>
        </FormGroup>

        <Button type="submit">
          View/Add Items
        </Button>
      </form>
    );
  }
};


export default Search
