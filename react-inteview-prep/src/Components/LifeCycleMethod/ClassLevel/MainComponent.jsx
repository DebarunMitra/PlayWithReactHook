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

    shouldComponentUpdate(){
        console.log("MainComponent shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("MainComponent getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("MainComponent componentDidUpdate");
    }

    handleChangeState = () => {
        this.setState({
            name: "MainComponent Name Updated"
        })
    }
    
  render() {
    console.log("MainComponent render");
    return (
      <div>
        <p>MainComponent</p>
        <button type='button' onClick={() => this.handleChangeState()}>Change State</button>
        <ComponentA />
    </div>
    )
  }
}
