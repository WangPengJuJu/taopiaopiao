import React from 'react';
import {withRouter } from 'react-router-dom'
@withRouter
export class More extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  // toPage(path){
  //   this.props.history.push(path);
  // }
  render(){
    const style = {
      vmiddle:{
        display:"inline-block",
        verticalAlign:"middle",
      },
      img:{
        display:"inline-block",
        verticalAlign:"middle",
        width:"12px",
        height:"12px",
        marginLeft:'5px',
      },
      box:{
        width:"100%",
        textAlign:"center",
        fontSize:"12px",
      },
    }
    return(
      <div style={style.box}>
        <span style={style.vmiddle}>更多</span>
        <img style={style.img} src="../src/images/more.png"></img>
      </div>
    )
  }
  componentDidMount(){
    // this.props.onRef(this);
  }

}
