import React from 'react';
import "../css/Header.css"
export class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    // this.actioveLine = React.createRef();
  }
  render(){
    const style = {
      color:{

      },
      li1:{
        width:'5%',
        height:'100%',
      },
      li2:{
        width:'90%',
        height:'100%',
        color:"white",
        fontSize:"16px",
      },
    }
    return(
      <header className="header-block">
        <ul className="header">
          <li style={style.li1} className="pull-left lh-100 ta-center">
            <img className="back" src={require("../images/back.png")} alt="返回" />
          </li>
          <li style={style.li2} className="pull-left lh-100 ta-center">{this.props.title}</li>
        </ul>
      </header>
    )
  }
  componentDidMount(){

  }

}
