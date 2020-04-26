import React, {useState} from 'react';
import './App.css';
import HookCounterEx1 from './Components/UseState/HookCounterEx1';
import SetStateBasedOnPreviousValue from './Components/UseState/SetStateBasedOnPreviousValue';
import ObjectAsStateVariable from './Components/UseState/ObjectAsStateVariable';
import StateVariableIsAnArray from './Components/UseState/StateVariableIsAnArray';
import FirstProgramWithUseEffect from './Components/UseEffect/FirstProgramWithUseEffect';
import Mouse from './Components/UseEffect/Mouse';
import MouseContainer from './Components/UseEffect/MouseContainer';
import IntervalCounter from './Components/UseEffect/IntervalCounter';

import DataFetching from './Components/DataFetchWithUseEffect/DataFetching';
import DataFetchingById from './Components/DataFetchWithUseEffect/DataFetchById';
import ComponentC from './Components/ContextHook/ComponentC';

import CounterWithReducer from './Components/UseReducer/CounterWithReducer';
import CounterWithObjectStateAndAction from './Components/UseReducer/CounterWithObjectStateAndAction';
import MaintainStateInMultipleReducer from './Components/UseReducer/MaintainStateInMultipleReducer';



export const UserContext = React.createContext();
export const OtherContext = React.createContext();


function App() {
  return (
    <div className="App">
      <MaintainStateInMultipleReducer />
    </div>
  );
}

export default App;

/**
 *     <UserContext.Provider value={'REACT-CONTEXT'}>
      <OtherContext.Provider  value={'OTHER-CONTEXT'}>
          <ComponentC />
      </OtherContext.Provider>
    </UserContext.Provider>
 */