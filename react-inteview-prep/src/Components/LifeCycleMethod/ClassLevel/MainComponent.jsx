import React, { Component } from 'react'
import ComponentA from '../ComponentA';

export default class MainComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "MainComponent"
      };

      console.log("MainComponent Constructor");
    };

    static getDerivedStateFromProps(props, state){
        console.log("MainComponent getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("MainComponent componentDidMount");
    }
    
  render() {
    console.log("MainComponent render");
    return (
      <div>
        <p>MainComponent</p>
        <ComponentA />
    </div>
    )
  }
}
