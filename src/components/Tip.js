import React from 'react';
import { Buttonradius } from './Buttonradius.js';
export class Tip extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const style = {
      vmiddle:{
        display:"inline-block",
        verticalAlign:"middle",
      },
      clos_img:{
        width:"25px",
        height:"25px",
        display:"inline-block",
        verticalAlign:"middle",
        margin:"0px 10px 0px 0px",
      },
      main_thumb:{
        width:"50px",
        height:"50px",
        display:"inline-block",
        verticalAlign:"middle",
        margin:"0px 10px 0px 0px",
      },
      ftWeight:{
        fontWeight:600,
      }
    }
    return(
      <div className="tip-container" style={{width:"100%",padding:"4px 4px 4px 10px"}}>
        <img style={style.clos_img} src="../src/images/close_tip.png"></img>
        <img style={style.main_thumb} src="../src/images/main_thumb.png"></img>
        <div style={style.vmiddle}>
          <div style={{}}>淘票票APP</div>
          <div style={{color:"#ddd",fontSize:"12px"}}>APP专享-首单最高可减40元</div>
        </div>
        <Buttonradius name="领取" color="red" borderColor="red"></Buttonradius>
      </div>
    )
  }
  componentDidMount(){

  }

}
