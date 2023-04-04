import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {
  constructor(props) {
    console.log("Child constructor called")
    super(props)

    this.state = {
      greeting: 'Hello!'
    }
  }

  updateGreeting = () => {
    console.log("Child updateGreeting() called")
    this.setState(prevState => {
      return {
        greeting: prevState.greeting === 'Hello Child!' ? 'Goodbye Child': 'Hello Child!'
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child component updated")
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    if (prevProps.parentGreeting !== this.props.parentGreeting) {
        console.log("Parent greeting has changed")
    }
  }

  render() {
    console.log("Child render method called")
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.updateGreeting}>Update Greeting</button>
      </div>
    )
  }
}

export default LifeCyclesCDUChild