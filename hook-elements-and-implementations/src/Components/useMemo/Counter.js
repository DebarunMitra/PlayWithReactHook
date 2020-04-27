import React, {useState, useMemo} from 'react';

function Counter() {

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne]) 


    return (
        <div>
            <button onClick={incrementOne}>Increment One - {countOne} is {isEven?'Even':'Odd'}</button><br/>
            <button onClick={incrementTwo}>Increment Two - {countTwo}</button>            
        </div>
    );
}

export default Counter;

/**
 * Note: UseMemo vs useCallback
 * useCallback cashes the provided function instance it self -- so it used to cash the function
 * useMemo evoke provided function and cashes its result -- so it used for to cash the result of the evoked function 
 */