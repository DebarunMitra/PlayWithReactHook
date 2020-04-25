import React, { useState, useEffect } from 'react';


function IntervalCounter() {
    const [count, setCount] = useState(0);

    const tick =()=>{
        //setCount(count+1)
        setCount(prevCount=> prevCount + 1)  
    }

    useEffect(()=>{
        function doSome() {
            console.log('Doing something');
        }
        doSome();
        const interval = setInterval(tick, 1000);

        return ()=>{
           clearInterval(interval ) 
        }
  //  }, [count])
    }, [])
    return (
        <div className="App">
            {count}
        </div>
    );
}

export default IntervalCounter;
