import React, { useState } from 'react';

function StateVariablesAnArray() {

    const [items, setItems] = useState([]);

    const addItem=()=>{
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div className="App">
        <button onClick={addItem}>Add New Number</button>
        <ul>
            {
                 items.map(item => <li key={item.id}>{item.value}</li>)
            }
        </ul>
        </div>
    );
}

export default StateVariablesAnArray;

/**
 * Note: useState
 * Using hook state doesn't have to be an object. it can be any type.
 * The useState hook returns an array with 2 elements.
    The first element is the current value of the state, and the second element is a state setter function.
 * New state value depends on the previous state value. You can pass a function to the setter function.
 * Dealing with Objects or array, always ,make sure to spread your variable and then call the setter function.
 */