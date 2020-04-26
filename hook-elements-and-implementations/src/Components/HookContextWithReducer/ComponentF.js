import React, { useContext } from 'react';
import { CountContext } from '../../App';


const ComponentF = () => {
    const countContext = useContext(CountContext)

    return (
        <div>
            <p>F - {countContext.countState}</p>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    );
};


export default ComponentF;