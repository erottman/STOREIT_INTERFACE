import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'
import { browserHistory } from 'react-router'


class CurrentBoxes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      boxes:[],
    }
    this.fetchBox = this.fetchBox.bind(this)
  }

  fetchBox(box) {
    console.log('kittnes', box);
    browserHistory.push('/items?id=' + box.id )
    }


  componentDidMount() {
   axios.get("http://localhost:3000/api/boxes")
      .then(response => {
        console.log('boxeslook here',response.data);
        this.setState({
          boxes : response.data,
        })
      })
      .catch(err => {
        console.log('error', err);
      })
    }

  makeBoxTableRow(box) {
    console.log('rows', box);
    return (
      <tr onClick={() =>this.fetchBox(box)}>
        <td>{box.identifier}</td>
        <td>{box.date_stored}</td>
        <td>{box.unit_location}</td>
      </tr>
    )
  }



render() {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr >
          <th>Name</th>
          <th>Date Stored</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
      {this.state.boxes.map((box) => {
        return this.makeBoxTableRow(box)
      })}
      </tbody>
    </Table>
    )
  }
}




export default CurrentBoxes
