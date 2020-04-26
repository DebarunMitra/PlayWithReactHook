import React, { useReducer } from 'react';


const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    // return newState
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter :state.firstCounter + action.value}
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'incrementBy10':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrementBy10':
            return {...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state

    }
}

function CounterWithObjectStateAndAction(props) {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <p>First Counter: {count.firstCounter}</p><br/>
            <p>Second Counter: {count.secondCounter}</p>
            <button onClick={() => dispatch({type : 'increment', value : 1})}>Count Up</button>
            <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({ type: 'decrement', value : 1})}>Count Down</button>
            <br/>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement by 5</button>
            <br />
            <button onClick={() => dispatch({ type: 'incrementBy10', value: 10 })}>Increment by 10 for C2</button>
            <button onClick={() => dispatch({ type: 'decrementBy10', value: 10 })}>Decrement by 10  for C2</button>
        </div>
    );
}

export default CounterWithObjectStateAndAction;