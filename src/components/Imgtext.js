import React from 'react';
export class Imgtext extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const style = {
      img:{
        display:"inline-block",
        width:"30px",
        height:"30px",
        borderRadius:"30px",
      },
      box:{
        textAlign:"center",
        width:"25%",
        margin:"5px auto auto auto",
        float:"left",
      },
      text:{
        display:"inline-block",
        height:"25px",
        lineHeight:"25px",
        width:"100%",
        textAlign:"center",
        fontSize:"14px",
      }
    }
    return(
      <div style={style.box}>
        <img style={style.img} src="../src/images/slider3.jpg"/>
        <div style={style.text}>党员贴吧</div>
      </div>
    )
  }
  componentDidMount(){

  }

}
