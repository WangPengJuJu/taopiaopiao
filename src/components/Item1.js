import React from 'react';
import $ from 'jquery';
import "../css/index.css";
export class Item1 extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    const style = {
      itemBox:{
        display:"table",
        padding:"8px 8px 0px 8px",
        width:"100%",
      },
      vmiddle:{
        display:"inline-block",
        verticalAlign:"middle",
      },
    }
    return(
      <li className=""  style={style.itemBox}>
        <div className="w-25 table-cell" style={style.vmiddle}>
          <img className="w-100 bor-ra-3" style={{}} src={this.props.item.src}/>
        </div>
        <div className="w-75 table-cell pl-8em"  style={style.vmiddle}>
            <div className="w-100">
                <div className="">{this.props.item.title}</div>
            </div>
       </div>
    </li>
    )
  }
  componentDidMount(){

  }

}
