import React, {useState, useEffect} from 'react'

function ClockHook() {
  const [clock, setClock] = useState(new Date().toLocaleString());

  useEffect(()=>{
    setInterval(()=>{
      setClock(new Date().toLocaleString());
    }, 1000);
  }, [])

  return (
    <div className='App'>
      <h1>Today's Time is <strong>{clock}</strong></h1>
    </div>
  )
};

export default ClockHook;