import React, {useState} from 'react'
import Employee from './Employee'

export const MainContext = React.createContext()

function ContextHookMain() {
  const initialState = {
    id: 1,
    name: 'Debarun',
    age: 26,
    salary: 5000,
  }
  const [employee, setEmployee] = useState(initialState)

  const handleSalary = (value) => {
    console.log("handleSalary Called");
    setEmployee((prev) => ({
      ...prev,
      salary: prev.salary + value,
    }))
  }

  const handleAge = (value) => {
    console.log("handleAge Called");
    setEmployee((prev) => ({
      ...prev,
      age: prev.age + value,
    }))
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>React Sandbox</h1>
      <div>
        <MainContext.Provider
          value={{
            employee: employee,
            increaseAge: handleAge,
            increaseSalary: handleSalary,
          }}
        >
          <Employee></Employee>
        </MainContext.Provider>
      </div>
    </div>
  )
}

export default ContextHookMain;
