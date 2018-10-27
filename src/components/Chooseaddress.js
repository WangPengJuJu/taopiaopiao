import React from 'react'
export function Chooseaddress(props){
  const b_style={
    display:"inline-block",
    textAlign:"center",
    lineHeight:"100%",
    padding:"2px 6px 2px 6px",
    color:"#8a8a8a",
  }
  return(
    <div style={b_style}>
    {props.address}
    <img src="../src/images/triangle_bottom.png"></img>
    </div>
  )
}
