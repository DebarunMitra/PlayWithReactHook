import React, {useContext} from 'react';
import ComponentF from './ComponentF';
import {UserContext, OtherContext} from '../../App';

const ComponentE = () => {

     const user = useContext(UserContext);
     const other = useContext(OtherContext);

    return (
        <div>
            E<br/>
            {user} - {other}
            <ComponentF />
        </div>
    );
};

export default ComponentE;