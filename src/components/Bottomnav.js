import React from 'react';
import $ from 'jquery';
import Route from '../route/index.js';
import {withRouter } from 'react-router-dom'

@withRouter
export class Bottomnav extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  // static propTypes = {
  //   match:PropTypes.object.isRequired,
  //   location:PropTypes.object.isRequired,
  //   history:PropTypes.object.isRequired,
  // }
  getNowNav(i){
    if(i == this.props.index){
      return "t-center active"
    }else{
      return "t-center"
    }
  }
  render(){
    // const {match,location,history} = this.props;
    const style = {
      vmiddle:{
        display:"inline-block",
        verticalAlign:"middle",
      },
      block:{
        position:'fixed',
        bottom:'0px',
        left:'0px',
        height:'50px',
        background:'white',
        zIndex:9999,
        width:'100%',
      },
      ulblock:{
        width:'100%',
        height:'100%',
        padding:'6px 0px 6px 0px',
        display: '-webkit-box', /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
        display: '-moz-box', /* 老版本语法: Firefox (buggy) */
        display: '-ms-flexbox', /* 混合版本语法: IE 10 */
        display: '-webkit-flex', /* 新版本语法: Chrome 21+ */
        display: 'flex', /* 新版本语法: Opera 12.1, Firefox 22+ */
      },
      flexItem:{
          WebkitBoxFlex: 1.0,
          MozFlexGrow: 1,
          WebkitFlexGrow: 1,
          flexGrow: 1,
      }
    }
    return(
      <div className="" style={style.block}>
        <ul className="" style={style.ulblock}>
          <li onClick={(e) => {this.switchBottomBar(e,this,1)}} className={this.getNowNav(1)} style={style.flexItem}>
            <img className="wh-20em" src="../src/images/img1.png"/>
            <img className="wh-20em di-n" src="../src/images/img1_choose.png"/>
            <span className="w-100 di-b" style={{textAlign:'center',marginTop:'5px',fontSize:'14px'}}>首页</span>
          </li>
          <li onClick={(e) => {this.switchBottomBar(e,this,2)}}  className={this.getNowNav(2)} style={style.flexItem}>
            <img className="wh-20em" src="../src/images/img2.png"/>
            <img className="wh-20em di-n" src="../src/images/img2_choose.png"/>
            <span className="w-100 di-b" style={{textAlign:'center',marginTop:'5px',fontSize:'14px'}}>资讯</span>
          </li>
          <li onClick={(e) => {this.switchBottomBar(e,this,3)}} className={this.getNowNav(3)} style={style.flexItem}>
            <img className="wh-20em" src="../src/images/img3.png"/>
            <img className="wh-20em di-n" src="../src/images/img3_choose.png"/>
            <span className="w-100 di-b" style={{textAlign:'center',marginTop:'5px',fontSize:'14px'}}>学习</span>
          </li>
          <li onClick={(e) => {this.switchBottomBar(e,this,4)}} className={this.getNowNav(4)} style={style.flexItem}>
            <img className="wh-20em" src="../src/images/img4.png"/>
            <img className="wh-20em di-n" src="../src/images/img4_choose.png"/>
            <span className="w-100 di-b" style={{textAlign:'center',marginTop:'5px',fontSize:'14px'}}>互动</span>
          </li>
          <li onClick={(e) => {this.switchBottomBar(e,this,5)}} className={this.getNowNav(5)} style={style.flexItem}>
            <img className="wh-20em" src="../src/images/img5.png"/>
            <img className="wh-20em di-n" src="../src/images/img5_choose.png"/>
            <span className="w-100 di-b" style={{textAlign:'center',marginTop:'5px',fontSize:'14px'}}>我的</span>
          </li>
        </ul>
      </div>
    )
  }
  switchBottomBar(event,_this,index){
    switch(index){
      case 1:
        this.props.history.push('/');
        // console.log(this.props);
        // <Redirect pathname="/" search="?name=1" />
      break;
      case 2:
        this.props.history.push('/information');
        // console.log(this.props.history);
        // this.context.router.history.push('/information');
      break;
      case 3:
        this.props.history.push('/study');
        // console.log(this.props);
      break;
      case 4:
        this.props.history.push('/interaction');
        // console.log(this.props);
      break;
      case 5:
        this.props.history.push('/my');
        // console.log(this.props);
    break;
      
    }
    // $("li").removeClass("active");
    // // alert(event.target.parentNode.innerHTML);
    // if(event.target.parentNode.innerHTML.indexOf("</li>") >= 0){
    //   $(event.target).addClass("active");
    //   // alert("点击li");
    // }else{
    //   // alert("点击li的子元素");
    //   $(event.target.parentNode).addClass("active");
    // }
    
  }
  componentDidMount(){

  }

}
