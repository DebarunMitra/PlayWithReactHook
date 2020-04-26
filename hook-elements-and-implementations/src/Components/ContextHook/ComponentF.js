import React from 'react';
import {UserContext, OtherContext} from '../../App';

const ComponentF = props => {
    return (
        <div>
            F            
            <UserContext.Consumer>
                {
                    user =>{
                        return (
                            <OtherContext.Consumer>
                                {
                                    other => {
                                        return (
                                            <div>User context value {user}, Other context value {other}</div>
                                        )
                                    }
                                }
                            </OtherContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    );
};

export default ComponentF;