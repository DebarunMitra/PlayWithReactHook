import React, {useState} from 'react';
import './App.css';
import HookCounterEx1 from './Components/UseState/HookCounterEx1';
import SetStateBasedOnPreviousValue from './Components/UseState/SetStateBasedOnPreviousValue';
import ObjectAsStateVariable from './Components/UseState/ObjectAsStateVariable';
import StateVariableIsAnArray from './Components/UseState/StateVariableIsAnArray';
import FirstProgramWithUseEffect from './Components/UseEffect/FirstProgramWithUseEffect';
import Mouse from './Components/UseEffect/Mouse';
import MouseContainer from './Components/UseEffect/MouseContainer';


function App() {
  return (
    <div className="App">
      <MouseContainer />        
    </div>
  );
}

export default App;
