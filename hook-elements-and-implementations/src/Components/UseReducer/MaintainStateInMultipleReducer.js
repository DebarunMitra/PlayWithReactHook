import React, { useReducer } from 'react';


const initialState = {
    firstCounter: 0
};

const reducer = (state, action) => {
    // return newState
    switch (action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return {firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state

    }
}

function MaintainStateInMultipleReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <p>First Counter: {count.firstCounter}</p><br />
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Count Up</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Count Down</button>
            <br />
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <div>
                <p>Second Counter: {countTwo.firstCounter}</p><br />
                <button onClick={() => dispatchTwo({ type: 'increment', value: 1 })}>Count Up</button>
                <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset</button>
                <button onClick={() => dispatchTwo({ type: 'decrement', value: 1 })}>Count Down</button>
                <br />
                <button onClick={() => dispatchTwo({ type: 'increment', value: 5 })}>Increment by 5</button>
                <button onClick={() => dispatchTwo({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            </div>
        </div>
        
    );
}

export default MaintainStateInMultipleReducer;

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

















