import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'
import { browserHistory } from 'react-router'


class CurrentItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
    }
    this.fetchItem = this.fetchItem.bind(this)
  }

  fetchItem(e) {
    axios.get("http://localhost:3000/api/items/1")
      .then(response => {
        if(response.data.error){
          alert("Please fill in all required data")
        }else {
          console.log('kittnes',response.data);
          browserHistory.push('/item?id=')

        }
      })
      .catch(err => {
        console.error(err)
        alert("Please fill in all required data")
        })
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
      <tr onClick={() =>this.fetchItem(item)}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>{item.value}</td>
      </tr>
    )
  }



render() {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr >
          <th>Name</th>
          <th>Qty</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
      {this.state.items.map((item) => {
        return this.makeItemTableRow(item)
      })}
      <tr>
      <td>Total</td>
      <td> 6 </td>
      <td> $450 </td>
    </tr>
      </tbody>
    </Table>
    )
  }
}




export default CurrentItems
