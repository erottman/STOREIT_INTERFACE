import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../App.css'


class CurrentItems extends Component {
  render() {

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

const listgroupInstance = (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item Name</th>
          <th>Qty</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Toaster</td>
          <td>1</td>
          <td>$35.99</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Forks</td>
          <td>10</td>
          <td>$12</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Microwave</td>
          <td>1</td>
          <td>$150</td>
        </tr>
      </tbody>
    </Table>


);
  return (
      <div>
      <div> {listgroupInstance}</div>
    </div>
    )
  }
}

export default CurrentItems
