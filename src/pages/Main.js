import React from 'react';
import { Header } from '../components/Header.js';
import { Imgtext } from '../components/Imgtext.js';
import { Tablist } from '../components/Tablist.js';
import { Sliderimg } from '../components/Sliderimg.js';
import { More } from '../components/More.js';
import { Item1 } from '../components/Item1.js';
import { Bottomnav } from '../components/Bottomnav.js';
import {withRouter } from 'react-router-dom'
@withRouter
export class Main extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[
        {title:'智慧党建标题1',src:require('../images/main_thumb.jpg')},
        {title:'智慧党建标题2',src:require('../images/main_thumb.jpg')},
        {title:'智慧党建标题3',src:require('../images/main_thumb.jpg')},
      ],
      meetingType : "空管资讯",
    };
    // this.child = {};
  }
 
  getListHtml(){
    let arry = [];
    this.state.list.map((item,index) => {
      arry.push(<Item1 key={index} item={item}></Item1>);
    });
    return arry;
  }
  changeList(type){
    switch(type){
      case 0 :
      this.setState({
        list:[
          {title:'智慧党建标题1',src:require('../images/main_thumb.jpg')},
          {title:'智慧党建标题2',src:require('../images/main_thumb.jpg')},
          {title:'智慧党建标题3',src:require('../images/main_thumb.jpg')},
        ],
        meetingType:'空管资讯',
      });
      break;
      case 1 :
      this.setState({
        list:[
          {title:'智慧党建标题4',src:require('../images/main_thumb.jpg')},
          {title:'智慧党建标题5',src:require('../images/main_thumb.jpg')},
          {title:'智慧党建标题6',src:require('../images/main_thumb.jpg')},
        ],
        meetingType:'党建动态',
      });
      break;
      case 2 :
      this.setState({
        list:[
          {title:'智慧党建标题7',src:require('../images/main_thumb.jpg')},
          {title:'智慧党建标题8',src:require('../images/main_thumb.jpg')},
          {title:'智慧党建标题9',src:require('../images/main_thumb.jpg')},
        ],
        meetingType:'通知公告',
      });
      break;
    }
  }
  getRef(child){
    this.state.child = child;
  }
  toList(){
    // this.props.history.push('/meetingList');
    // this.props.history.push({pathname:'/meetingList',query:{meetingType:this.state.meetingType}});//通过query传参不需要配置路由表
    this.props.history.push('/meetingList/'+this.state.meetingType);//通过params传参
  }
  render(){
    const style = {
      vmiddle:{
        display:"inline-block",
        verticalAlign:"middle",
      },
      center_block:{
        overflow:'hidden',
        width:"100%",
        padding:"15px 15px 20px 15px",
      },
      w70:{
        width:"70%",
        display:'inline-block',
      },
      w30:{
        width:"30%",
        display:'inline-block',
      },
    }
    return(
      <div className="main-container" style={{fontSize:"16px",width:"100%",height:"100%"}}>
        <Header className="fix"  title="智慧党建"></Header>
        <Sliderimg></Sliderimg>
        <div style={style.center_block}>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
          <Imgtext></Imgtext>
        </div>
        <div style={style.w70}>
          <Tablist callbackFunc={this.changeList.bind(this)}></Tablist>
          {/* <Tablist callbackFunc={(type) => {this.changeList(type)}}></Tablist> */}
        </div>
        <div style={style.w30}  onClick={this.toList.bind(this)}>
          <More  onRef={this.getRef.bind(this)}></More>
        </div>
        <div style={{marginBottom:'55px',}}>
          {this.getListHtml()}
        </div>
        <Bottomnav index="1"></Bottomnav>
      </div>

    )
  }
  componentDidMount(){
    
  }

}
