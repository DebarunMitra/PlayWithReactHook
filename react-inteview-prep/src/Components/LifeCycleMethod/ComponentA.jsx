import React, { Component } from 'react'

export default class ComponentA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "ComponentA"
      };

      console.log("ComponentA Constructor");
    };

    static getDerivedStateFromProps(props, state){
        console.log("ComponentA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
    }
    
  render() {
    console.log("ComponentA render");
    return (
      <div>ComponentA</div>
    )
  }
}
