import React, {Suspense, useState, lazy, useTransition} from 'react'
// import {AdminData} from './AdminData';
import {getAddition} from './util/getAddition';
import { lazyload } from './util/lazyload';

const AdminData = lazy(()=> wait(1000).then(()=> import("./AdminData").then(module=>{
    return {default: module.AdminData}
})))

function Home() {
    const [isAdmin, setIsAdmin] = useState(false);

    const [isPending, startTransition] = useTransition()

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
        <button onClick={() => {
            startTransition(() => {
                setIsAdmin(prev => !prev)   
            })
        }}>Toggle Admin</button>
        {isPending && "loading..."}
        <Suspense fallback={<h1>Loading...</h1>}>
        {isAdmin?<AdminData /> : <h2>Not Admin</h2>}
        </Suspense>
    </>
  )
}

function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default Home