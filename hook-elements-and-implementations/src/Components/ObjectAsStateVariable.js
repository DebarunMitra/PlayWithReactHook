import React, { useState } from 'react';

function ObjectAsStateVariable() {

    const [name, setName ] = useState({firstName: '', lastName: ''});

    return (
        <div className="App">
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}/>
                <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your Last name is - {name.lastName}</h2>
            </form>
        </div>
    );
}

export default ObjectAsStateVariable;

/**
 * Note: useState doesn't marge the object automatically.
 * We have to do that manually
 */

/**
 * Note:
 * To use previous state value use the "prevState"
 */