import React, { Component } from 'react'
import '../App.css'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

class Main extends Component {
  render() {
    return (
      <div className='main'>
      <h1 className="home-name">Easy</h1>
        <section className="home-image">
          <div className='home-nav col-md-2 col-md-offset-9 col-xs-6 col-xs-offset-3'>
            <h1 className="home-name">Storage</h1>
            <Link className="home-button-link" to="/login"><Button className="home-button btn btn-lg">Login</Button></Link>
          </div>
        </section>
      </div>
    )
  }
}

export default Main
