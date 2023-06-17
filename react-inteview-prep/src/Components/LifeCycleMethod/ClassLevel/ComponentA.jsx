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

    shouldComponentUpdate(){
        console.log("ComponentA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("ComponentA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("ComponentA componentDidUpdate");
    }
    
  render() {
    console.log("ComponentA render");
    return (
      <div>ComponentA</div>
    )
  }
}
