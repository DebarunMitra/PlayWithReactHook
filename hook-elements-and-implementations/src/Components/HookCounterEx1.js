import React, { useState } from 'react';

function HookCounterEx1() {

    const [count, setCount]= useState(0); 

    return (
        <div className="App">
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Count Up</button>
            <button onClick={() => setCount(count - 1)}>Count Down</button>
        </div>
    );
}

export default HookCounterEx1;

/**
 * Note:- Rules of Hooks
 * 1) Only call hook at top level
 * Ex:  Don't call hook inside loops, conditions or nested functions.
 * 2) Only call hooks from React Functions
 * Ex: call them within react functional component and not just any regular js function
 */