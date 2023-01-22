import React, { Component } from 'react'

export default class ClockClass extends Component {
    constructor(props){
        super(props);
        this.state={
            date: new Date().toLocaleString()
        }
    }

    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({
            date: new Date().toLocaleString()
        })
    }
  render() {
    return (
      <div className='App'>
        <h1>Today's Time is <strong>{this.state.date}</strong></h1>
      </div>
    )
  }
}

// Execution Steps:
// Step 1:
// clockClass is called from the main component 'App'
// Step 2:
// Then clockClass calls the react.component and it creats the constructor and a state with date object value
// Step 3:
// After that react calls the render method and it displays the html content and initial date value from state
// Step 4:
// Once the render is done, react calls the LFC componentDidMount method. Then the clockClass component setup
// a timer which will call a tick function to update the state date value.
// Step 5:
// Once the timer set into the browser it calls the tick function every second to update the date value.
// And when the date value is updated, it automatically renders the updated date value into the screen
// Step 6:
// If any time clockClass component removed from the dom, then LFC componentWillUnmount method get trigger
// SO the timer stops from the browser


