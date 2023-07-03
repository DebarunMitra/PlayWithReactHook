import React, {useState, useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

function ParentComponent() {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]) 

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]) 

    return (
        <div>
        <Title />
        <Count text="AGE" count={age}/>
        <Button handleClick={incrementAge}>Increment Age</Button>
        <Count text="SALARY" count={salary}/>
        <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default ParentComponent;

//what is useCallback?
//useCallback is hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed.

//why to useCallback?
// It is usefull when passing callback to optimized child components that rely on the reference equality to prevent unnecessary rerendes.


