import React, { Component } from 'react'
import { Link } from 'react-router'
import { Table, ListGroup, ListGroupItem } from 'react-bootstrap'
import '../App.css'
import axios from 'axios'
import { browserHistory } from 'react-router'
import AUTH_URL from '../config/server.js'


class CurrentItems extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items:[],
    }
    this.fetchItem = this.fetchItem.bind(this)
  }

  fetchItem(item) {
    browserHistory.push('/item?id=' + item.id )
  }

  componentWillReceiveProps(nextProps) {
    console.log('should be items', nextProps);
    this.setState({
      items: nextProps.items
    })
  }


  makeItemTableRow(item) {
    console.log(item);
    return (
      <tr onClick={() =>this.fetchItem(item)}>
        <td>{item.name}</td>
        <td>{item.quantity}</td>
        <td>${item.value}</td>
      </tr>
    )
  }

  sortTable(column) {
    let sortItems = this.state.items

      sortItems.sort(function (a, b) {
        if(a[column] > b[column]) {
          return -1
        }
        if(a[column] < b[column] ) {
          return 1
        }
        return 0
      })
      this.setState({
        items: sortItems
      })
  }



render() {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr >
          <th onClick={() => this.sortTable('name')}>Name</th>
          <th onClick={() => this.sortTable('quantity')}>Qty</th>
          <th onClick={() => this.sortTable('value')}>Value </th>
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
