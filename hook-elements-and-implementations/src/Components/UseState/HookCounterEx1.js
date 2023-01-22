import React, { useState } from 'react';

function initialStatevalue(){
    console.log("InitialStatevalue Function Called...");
    return 0;
}

function HookCounterEx1() {

    const [count, setCount]= useState(0); 

// const [count, setCount]= useState(()=>{
//     console.log("InitialStatevalue Function Called...");
//     return 0;
// });
// We can also set use state value using functional way
// But it's better to create a different function instade of creating into the useState, Ex below

// const [count, setCount]= useState(()=>initialStatevalue());


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