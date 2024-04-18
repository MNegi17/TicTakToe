import React from 'react'

export default function Square(props) {
  return (
<div style={{height:"200px" , width:"500px"}} className=' flex justify-center items-center border-solid border-2 border-black' onClick={props.onClick}>
        <h1>{props.value}</h1>
    </div>
  )
}
