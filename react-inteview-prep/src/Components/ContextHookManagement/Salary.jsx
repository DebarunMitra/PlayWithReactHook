import React, {useContext} from 'react'
import {MainContext} from './ContextHookMain'

function Salary() {
    let context = useContext(MainContext)
    console.log("Salary Called");
  
    return (
      <div>
        <h2>Welcome to Salary Component...</h2>
        <p>
          <label>
            Employee ID : <b>{context.employee.id}</b>
          </label>
        </p>
        <p>
          <label>
            Employee Salary : <b>{context.employee.salary}</b>
          </label>
        </p>
        <button type='button' onClick={()=>context.increaseSalary(1000)}>Increase Salary</button>
      </div>
    )
  }

export default React.memo(Salary)