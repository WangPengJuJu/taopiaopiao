import React from 'react';
import $ from 'jquery';
import "../css/index.css";
export class Item3 extends React.Component{
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
          <img className="w-100 bor-ra-3" style={{}} src="../src/images/slider1.jpg"/>
        </div>
        <div className="w-75 table-cell pl-8em"  style={style.vmiddle}>
            <div className="w-100">
                <div className="">空管微视</div>
                <div className="">
                  <span style={{width:'70%',float:'left'}}>子标题呵呵哈哈哈</span>
                  <span style={{float:'right'}}>点赞999</span>
                </div>
            </div>
       </div>
    </li>
    )
  }
  componentDidMount(){

  }

}
