import React, {useState} from 'react';
import './App.css';
import HookCounterEx1 from './Components/HookCounterEx1';
import SetStateBasedOnPreviousValue from './Components/SetStateBasedOnPreviousValue';
import ObjectAsStateVariable from './Components/ObjectAsStateVariable';
import StateVariableIsAnArray from './Components/StateVariableIsAnArray';



function App() {
  return (
    <div className="App">
      <StateVariableIsAnArray />        

    </div>
  );
}

export default App;
