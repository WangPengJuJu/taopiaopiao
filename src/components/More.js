import React from 'react';
export class More extends React.Component{
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

  }

}
