import React, { Component } from 'react'
import { Redirect, browserHistory } from 'react-router'
import '../App.css'
import Header from './Header'
import LandingPage from './LandingPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:[],
      cart:[],
      numberOfItems: 0,
      isLoggedIn: false,
      loggedInUser: ''
    }
    this.addToBox = this.addToBox.bind(this)
    this.deleteBoxItem = this.deleteBoxItem.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  componentDidUpdate(prevProps) {
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

    if (isLoggingIn) {
      browserHistory.goBack()
    } else if (isLoggingOut) {
      browserHistory.push('/tenents')
    }
  }

  addUser(newUser){
    this.setState({
      user: this.state.user.concat(newUser),
      isLoggedIn: !this.state.isLoggedIn,
    })
    browserHistory.push('/tenents')
  }

  addToBox(newItem){
    this.setState({
      cart: this.state.box.concat(newItem),
      numberOfItems: this.state.numberOfItems + 1
    })
  }

  deleteBoxItem(item){
    const index = this.box.cart.indexOf(item)
    this.setState({
      cart: this.state.box.filter((_, i) => i !== index),
      numberOfItems: this.box.numberOfItems - 1
    })
  }




  render() {
    const homepage = (
      <div>
      <div><Header/></div>
      <div><LandingPage addUser={this.addUser}/></div>
    </div>
    )

    return (
      <div>
        { this.props.children
          ? <div>
            <Header numberOfItems={this.state.numberOfItems} isLoggedIn={this.state.isLoggedIn}/>
            {React.cloneElement(this.props.children, {...this.state, addUser: this.addUser})}
          </div>
          :  <div className="homepage">
              {homepage}
            </div>
        }
      </div>
    )
  }
}

export default App
