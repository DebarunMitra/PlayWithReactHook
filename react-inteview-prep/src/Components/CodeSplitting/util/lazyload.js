import {lazy} from 'react'

export function lazyload(path = "../AdminData.jsx", namedExport = null) {
    console.log(path);
    return lazy(() => {
        const promise = import(path)
        if(namedExport === null) {
            return promise
        } else {
            return wait(1000).then(()=> promise.then(module => ({default: module[namedExport]})))
        }
    })
}

function wait(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

// lazyload("../About.jsx", "About");
