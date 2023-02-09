import React, {useContext} from 'react'
import { CounterContext } from './CounterContext'; /*Counter using context*/

// function CounterButton({counterValue, handleCount}) {
{/*Counter using context*/}
function CounterButton() {
    const courseContext = useContext(CounterContext);
    const {handleCount} = courseContext;
  return (
    <div>
        <button onClick={()=>handleCount()}>Count++</button>
    </div>
  )
}

export default CounterButton