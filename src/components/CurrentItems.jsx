import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'


class CurrentItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
    }
  }

  componentDidMount() {
   axios.get("http://localhost:3000/api/items")
      .then(response => {
        console.log('noodle',response.data);
        this.setState({
          items : response.data,
        })
      })
      .catch(err => {
        console.log('error', err);
      })
    }

  makeItemTableRow(item) {
    console.log(item);
    return (
      <tr>
        <td>1</td>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.value}</td>
      </tr>
    )
  }



render() {
  console.log('ctas', this.state.items[0]);
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
      {this.state.items.map((item) => {
        return this.makeItemTableRow(item)
      })}
      </tbody>
    </Table>
    )
  }
}




export default CurrentItems
