import React, {useState, useEffect, useRef} from 'react';

function Timer() {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
        console.log("useEffect called...");
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer=>prevTimer+1)
        }, 1000)

        return ()=>{
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hook Timer - {timer}
            <button onClick={()=>clearInterval(intervalRef.current)}>Clear Hook Timer</button>    
        </div>
    );
}

export default Timer;