import React, { useState, useEffect } from 'react';
import Mouse from './Mouse';


function MouseContainer() { 
    const [display, setDisplay] = useState(true);

    return (
        <div className="App">
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <Mouse />}
        </div> 
    );
}

export default MouseContainer;
