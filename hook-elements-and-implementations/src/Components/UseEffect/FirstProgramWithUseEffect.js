import React, { useState, useEffect } from 'react';

function FirstProgramWithUseEffect() {


    const [count, setCount] = useState(0);

    useEffect(()=>{
         document.title = `Count clicked ${count}`
    })

    return (
        <div className="App">
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Count Up</button>
            <button onClick={() => setCount(count - 1)}>Count Down</button>
        </div>
    );
}

export default FirstProgramWithUseEffect;

/**
 * Note: useEffect
 * performs side effect in functional components
 * It is a close replacement for componentDidMount, componentDidUpdate, componentDidUnmount
 * UseEffect runs after every render.
 * It should place inside the component.
 */