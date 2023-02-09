import React from 'react'

function CounterButton({counterValue, handleCounter}) {
  return (
    <div>
        <button onClick={()=>handleCounter()}>Count++</button>
    </div>
  )
}

export default CounterButton