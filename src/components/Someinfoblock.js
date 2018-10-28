import React from 'react';
export class Someinfoblock extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    // this.actioveLine = React.createRef();
  }
  render(){
    const style = {
      
    }
    return(
      <div style={{margin:'8px',}}>
        <p style={{width:'100%',}}>发布人:李大钊</p>
        <p style={{width:'100%',}}>组织:空管局网络公司党支部</p>
        <p style={{width:'100%',}}>时间:2018-12-12 15:55</p>
      </div>
    )
  }
  componentDidMount(){

  }

}
