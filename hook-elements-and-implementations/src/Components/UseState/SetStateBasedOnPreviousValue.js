import React, { useState } from 'react';

function SetStateBasedOnPreviousValue() {

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <p>Count: {count}</p>
            <button onClick={() => setCount(prevCount=>prevCount+5)}>Count Up by 5</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Count Down</button>
        </div>
    );
}

export default SetStateBasedOnPreviousValue;

/**
 * Note:
 * To use previous state value use the "prevState"
 */