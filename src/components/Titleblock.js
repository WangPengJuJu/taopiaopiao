import React from 'react';
export class Titleblock extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    // this.actioveLine = React.createRef();
  }
  render(){
    const style = {
      
    }
    return(
      <div>
        <h1 style={{margin:'0px auto',textAlign:'center',}}>主标题</h1>
        <h3 style={{margin:'0px auto',textAlign:'center',}}>副标题</h3>
      </div>
    )
  }
  componentDidMount(){

  }

}
