import React from 'react'
export function Buttonradius(props){
  const b_style={
    display:"inline-block",
    textAlign:"center",
    lineHeight:"100%",
    padding:"2px 6px 2px 6px",
    borderRadius:"10px",
    marginLeft:"10px",
    backgroundColor:props.backgroundColor,
    color:props.color,
    border:"1px solid " + props.borderColor,
  }
  return(
    <div style={b_style}>{props.name}</div>
  )
}
