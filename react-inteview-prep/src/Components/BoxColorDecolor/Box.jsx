import React from 'react'

function Box({id, bg=true, bgColor='green', border=true, borderColor='black', handleClick}) {
  // console.log("testing", typeof(localStorage.getItem("testing")));
  // console.log("testing-bool", typeof(JSON.parse(localStorage.getItem("testing-bool"))));
  return (
    <div
        id={id}
        style={{
            width: '80px',
            height: '80px',
            backgroundColor: bg?bgColor:'white',
            border: border?`2px solid ${borderColor}`:'2px solid white',
            margin: '5px',
        }}
        onClick={(e) => bg?handleClick(e):false}
    ></div>
  )
}

export default Box