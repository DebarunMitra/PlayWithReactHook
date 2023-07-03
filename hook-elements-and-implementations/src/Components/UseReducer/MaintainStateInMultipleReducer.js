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