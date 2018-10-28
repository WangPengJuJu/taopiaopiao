import React from 'react';
export class Searchblock extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    const style = {
      img:{
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        WebkitTransform:'translate(-50%,-50%)',
      },
      box:{
        width:"100%",
        height:"45px",
        
        margin:'',
      },
      text:{
        display:"inline-block",
        height:"25px",
        lineHeight:"25px",
        width:"100%",
        textAlign:"center",
        fontSize:"14px",
      },
      input:{
        width:"80%",
        height:"100%",
        padding:"8px",
        marginBottom:'0px',
      },
    }
    return(
      <div style={style.box}>
        <input className="di-inline" type="text" style={style.input}/>
        <div className="di-inline" style={{width:"20%",height:"100%",background:"red",position:'relative'}}>
          <img style={style.img} src={require("../images/search.png")}/>
        </div>
      </div>
    )
  }
  componentDidMount(){

  }

}
