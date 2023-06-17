import React from 'react'

function Person({personName}) {
    if(personName === 'Joker'){
        throw new Error("Access Denied!")
    }
  return (
    <div>{personName}</div>
  )
}

export default Person