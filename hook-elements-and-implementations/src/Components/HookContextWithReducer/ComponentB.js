import React, {useContext} from 'react';
import ComponentD from './ComponentD';

const ComponentB = () => {

    return (
        <div>
            B
            <ComponentD />
        </div>
    );
};

export default ComponentB;