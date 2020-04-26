import React from 'react';
import ComponentE from './ComponentE';

const ComponentC = props => {
    return (
        <div>
            C
            <ComponentE />
        </div>
    );
};


export default ComponentC;