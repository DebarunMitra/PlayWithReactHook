import React, {useContext} from 'react'
import {MainContext} from './ContextHookMain'
import Salary from './Salary';

function Employee() {
    let context = useContext(MainContext)
    console.log("Employee Called");
  
    return (
      <div>
        <h2>Welcome to Employee Component...</h2>
        <p>
          <label>
            Employee ID : <b>{context.employee.id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Name : <b>{context.employee.name}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Age : <b>{context.employee.age}</b>
          </label>
        </p>
        <button type='button' onClick={()=>context.increaseAge(1)}>Increase Age</button>
        <Salary></Salary>
      </div>
    )
  }

export default React.memo(Employee)