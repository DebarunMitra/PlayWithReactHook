import React, {useState} from 'react'
import CounterButton from './CounterButton'
import CounterDisplay from './CounterDisplay'
import { CounterContext } from './CounterContext';

function MainCounter() {
    const [count, setCount] = useState(0);

    const handleCount = ()=>{
        setCount((prevCount)=> prevCount+1);
    }
  return (
    <div>
        {/*Counter without context*/}
        {/* <CounterDisplay counter={count} /> */}
        {/* <CounterButton counter={count} handleCount={handleCount} /> */}
        {/*Counter using context*/}
        <CounterContext.Provider value={{count, handleCount}}>
            <h3>Count: {count}</h3>
            <CounterButton />
        </CounterContext.Provider>
    </div>
  )
}

export default MainCounter