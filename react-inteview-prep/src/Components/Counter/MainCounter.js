import React, {useState} from 'react'
import CounterButton from './CounterButton'
import CounterDisplay from './CounterDisplay'

function MainCounter() {
    const [count, setCount] = useState(0);

    const handleCount = ()=>{
        setCount((prevCount)=> prevCount+1);
    }
  return (
    <div>
        <CounterDisplay counter={count} />
        <CounterButton counter={count} handleCounter={handleCount} />
    </div>
  )
}

export default MainCounter