import React, {useState} from 'react';
import './App.css';
import HookCounterEx1 from './Components/UseState/HookCounterEx1';
import SetStateBasedOnPreviousValue from './Components/UseState/SetStateBasedOnPreviousValue';
import ObjectAsStateVariable from './Components/UseState/ObjectAsStateVariable';
import StateVariableIsAnArray from './Components/UseState/StateVariableIsAnArray';
import FirstProgramWithUseEffect from './Components/UseEffect/FirstProgramWithUseEffect';



function App() {
  return (
    <div className="App">
      <FirstProgramWithUseEffect />        
    </div>
  );
}

export default App;
