import React from 'react'

function TicTacToeBox({id, bg=true, bgColor='green', border=true, borderColor='black', handleClick, value='-'}) {
 
  return (
    <div
        id={id}
        style={{
            width: '80px',
            height: '80px',
            backgroundColor: bg?bgColor:'white',
            border: border?`2px solid ${borderColor}`:'2px solid white',
            // margin: '5px',
            fontSize: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        onClick={(e) => bg?handleClick(e):false}
    >{value}</div>
  )
}

export default TicTacToeBox