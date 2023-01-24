import React, {useState, useReducer} from 'react';
import './App.css';
// useStateHook
import HookCounterEx1 from './Components/UseState/HookCounterEx1';
import SetStateBasedOnPreviousValue from './Components/UseState/SetStateBasedOnPreviousValue';
import ObjectAsStateVariable from './Components/UseState/ObjectAsStateVariable';
import StateVariableIsAnArray from './Components/UseState/StateVariableIsAnArray';

// useEfffectHook
import FirstProgramWithUseEffect from './Components/UseEffect/FirstProgramWithUseEffect';
import Mouse from './Components/UseEffect/Mouse';
import MouseContainer from './Components/UseEffect/MouseContainer';
import IntervalCounter from './Components/UseEffect/IntervalCounter';

import DataFetching from './Components/DataFetchWithUseEffect/DataFetching';
import DataFetchingById from './Components/DataFetchWithUseEffect/DataFetchById';
// import ComponentC from './Components/ContextHook/ComponentC';

import CounterWithReducer from './Components/UseReducer/CounterWithReducer';
import CounterWithObjectStateAndAction from './Components/UseReducer/CounterWithObjectStateAndAction';
import MaintainStateInMultipleReducer from './Components/UseReducer/MaintainStateInMultipleReducer';


import ComponentA from './Components/HookContextWithReducer/ComponentA';
import ComponentB from './Components/HookContextWithReducer/ComponentB';
import ComponentC from './Components/HookContextWithReducer/ComponentC';


import DataFetchUsingUseState from './Components/UseState/DataFetchUsingUseState';

import DataFetchUsingUseReducer from './Components/UseReducer/DataFetchUsingUseReducer';


import ParentComponent from './Components/useCallback/ParentComponent';

import Counter from './Components/useMemo/Counter';

import FocusInput from './Components/useRef/FocusInput';
import Timer from './Components/useRef/Timer';
import StorePreviousValue from './Components/useRef/StorePreviousValue';


import DocTitleOne from './Components/CustomHook/DocTitleOne';
import DocTitleTwo from './Components/CustomHook/DocTitleTwo';

import ClockClass from './Components/LifeCycleMethodVsHooks/ClockClass';
import ClockHook from './Components/LifeCycleMethodVsHooks/ClockHook';


// export const UserContext = React.createContext();
// export const OtherContext = React.createContext();

 /** For useContext hook with useReducer hook
export const CountContext = React.createContext();


const initialState = 0;


const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state

  }
}

 */




function App() {
  return (
    <div className="App">
      {/* <HookCounterEx1 /> */}

      {/* LifeCycleMethodVsHooks */}
      {/* <ClockClass /> */}
      {/* <ClockHook /> */}

      {/* useMemo */}
      {/* <Counter /> */}

      {/* useRef */}
      {/* <FocusInput /> */}
      <Timer />
      {/* <StorePreviousValue /> */}

      {/* use Custom Hook Ex */}
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
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

 /** For useContext hook with useReducer hook
  function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
    <CountContext.Provider
      value ={{countState: count, countDispatch: dispatch}}
      >
        Counter : {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
    </CountContext.Provider>

    </div>
  );
}

  */