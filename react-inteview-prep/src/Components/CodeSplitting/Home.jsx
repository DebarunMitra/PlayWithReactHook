import React, {useState} from 'react'
import AdminData from './AdminData';
import {getAddition} from './util/getAddition';

function Home() {
    const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
        <h1>Home</h1>
        <button onClick={()=>{
            // alert(getAddition(4,4))
            import("./util/getAddition").then(module=>{
                alert(module.getAddition(4,4));
            })
        }}>Add 4 + 4</button>
        <br />
        <br />
        <button onClick={() => setIsAdmin(prev => !prev)}>Toggle Admin</button>
        {isAdmin?<AdminData /> : <h2>Not Admin</h2>}
    </>
  )
}

export default Home