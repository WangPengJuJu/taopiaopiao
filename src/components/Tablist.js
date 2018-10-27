import React from 'react';
import "../css/Tablist.css";
import $ from 'jquery';
export class Tablist extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    this.activeLine = React.createRef();
  }
  getIndex(node,nodeParent,tag){
    let tags = nodeParent.getElementsByTagName(tag);
    for(let i = 0;i < tags.length;i++){
      if(node == tags[i]){
        return i;
        break;
      }
    }
  }
  //切换tab
  switchbar(e){
    let index = this.getIndex(e.target,e.target.parentNode,"li");
    $('li').removeClass('activeLine');
    $(e.target).addClass('activeLine');
    switch(index){
      case 0:

    }
    let value = index * 33.33 + "%";
    this.activeLine.current.style.left = value;

  }
  render(){
    const style = {
      vmiddle:{
        display:"inline-block",
        verticalAlign:"middle",
      },
      ftWeight:{
        fontWeight:600,
      },
      flexIef:{
          display: "-webkit-box", /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
          display: "-moz-box", /* 老版本语法: Firefox (buggy) */
          display: "-ms-flexbox", /* 混合版本语法: IE 10 */
          display: "-webkit-flex", /* 新版本语法: Chrome 21+ */
          display: "flex", /* 新版本语法: Opera 12.1, Firefox 22+ */
      },
      /* 是否允许子元素伸缩 */
      flexItem:{
          WebkitBoxFlex: 1.0,
          WozFlexGrow: 1,
          WebkitFlexGrow: 1,
          flexGrow: 1,
      }
    }
    return(
      <div className="flex-container">
        <ul className="flex-def">
          <li onClick={(e) => {this.switchbar(e)}} className="flex-item t-center activeLine" style={{}}>空管资讯</li>
          <li onClick={(e) => {this.switchbar(e)}} className="flex-item t-center">党建动态</li>
          <li onClick={(e) => {this.switchbar(e)}} className="flex-item t-center">通知公告</li>
          <span ref={this.activeLine} className="active-line"></span>
        </ul>
      </div>
    )
  }
  componentDidMount(){

  }

}
