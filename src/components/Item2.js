import React from 'react';
import $ from 'jquery';
import "../css/index.css";
export class Item2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    console.log(this.props)
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
      <li className=""  style={style.itemBox} onClick={() => {this.props.clickItemCallback()}}>
        <div className="w-25 table-cell" style={style.vmiddle}>
          <img className="w-100 bor-ra-3"  src={this.props.item.src}/>
        </div>
        <div className="w-75 table-cell pl-8em"  style={style.vmiddle}>
            <div className="w-100">
                <div className="">{this.props.item.title}</div>
                <div className="">{this.props.item.subTitle}</div>
            </div>
       </div>
    </li>
    )
  }
  componentDidMount(){

  }

}
