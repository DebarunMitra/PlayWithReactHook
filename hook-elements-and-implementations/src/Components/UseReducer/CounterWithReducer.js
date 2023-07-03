 import React, {useReducer} from 'react';


const initialState = 0;

const reducer = (state, action) =>{
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default :
            return state

    }
}

const CounterWithReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('increment')}>Count Up</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <button onClick={() => dispatch('decrement')}>Count Down</button>
        </div>
    );
};


export default CounterWithReducer;

// useReducer is a hook that is used for state management.
//It is an alternative to useState.
//What is the difference?
//  useState is build using useReducer, it's more premetive compared to use state.
//When to use useReducer vs useState?

// JS function reduce
//Reduce: It used to take 2 values as input and process then amd generate a unique value from it.
// const arr = [2,5,7,8,10];
// Find sum all the element from the array
// result = arr.reduce((accumulator, current)=>accumulator+current, 0);
// console.log(result);

// Find max element from the array
// result = arr.reduce((accumulator, current)=>accumulator>current?accumulator:current, 0);
// console.log(result);

// reduceInJS VS useReducer In React 
// 1) array.reduce(reducer, initialValue) vs useReducer(reducer, initialState);
// 2) singleValue = reducer(accumulator, itemValue) vs reducer(currentState, action)
// 3) reduce method returns single value vs useReducer return a pair of values, [newState, dispatch]
