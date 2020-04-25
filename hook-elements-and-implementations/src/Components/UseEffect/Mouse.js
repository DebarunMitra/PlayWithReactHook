import React, { useState, useEffect } from 'react';

function Mouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMouseMovement = e =>{
        console.log('event');
        setX(e.clientX);
        setY(e.clientY);
    }


    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMouseMovement)
    },[])//['specify state or props need to watch for the update']
 
    return (
        <div className="App">
            <p>Hooks X: {x},Y : {y}</p>
        </div>
    );
}

export default Mouse; 

/**
 * Note: useEffect
 * performs side effect in functional components
 * It is a close replacement for componentDidMount, componentDidUpdate, componentDidUnmount
 * UseEffect runs after every render.
 * It should place inside the component.
 */