import React, {useState, useEffect,useRef} from 'react'

export default function StorePreviousValue() {
    const [name, setName] = useState("");

    const prevName = useRef("");

    useEffect(()=>{
        prevName.current = name;
    }, [name])
  return (
    <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
        <p>My name is {name}, But it was {prevName.current}</p>
    </div>
  )
}
