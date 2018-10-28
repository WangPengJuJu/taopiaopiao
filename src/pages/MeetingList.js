import React from 'react';
import { Header } from '../components/Header.js';
import { Imgtext } from '../components/Imgtext.js';
import { Tablist } from '../components/Tablist.js';
import { Searchblock } from '../components/Searchblock.js';
import { More } from '../components/More.js';
import { Item2 } from '../components/Item2.js';
import { Bottomnav } from '../components/Bottomnav.js';
// import createHistory from 'history/createHashHistory';
import { withRouter } from 'react-router-dom'
@withRouter
export class MeetingList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[
        {title:'智慧党建标题1',subTitle:'智慧党建标题1子标题',src:require('../images/main_thumb.jpg')},
        {title:'智慧党建标题2',subTitle:'智慧党建标题2子标题',src:require('../images/main_thumb.jpg')},
        {title:'智慧党建标题3',subTitle:'智慧党建标题3子标题',src:require('../images/main_thumb.jpg')},
      ]
    };
    
    // console.log(history);
  }

  // list = [];定义变量

  getListHtml(){
    let arry = [];
    this.state.list.map((item,index) => {
      arry.push(<Item2 key={index} item={item} clickItemCallback={this.clickItemCallback.bind(this)}></Item2>);
      return false
    });
    // console.log(arry);
    return arry;
  }
  clickItemCallback(){
    // const history = createHistory();
    // console.log(history);
    this.props.history.push('/meetingInfo');
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
      searchBlock:{
        position:"fixed",
        top:"50px",
        left:"0px",
        width:"100%",
        height:'50px',
        padding:'5px 0px 0px 0px',
        background:'rgb(244,244,244)',
      }
    }
    return(
      <div className="main-container" style={{fontSize:"16px",width:"100%",height:"100%"}}>
        {/* <Header className="fix" title={this.props.location.query.meetingType}></Header> */}
        <Header className="fix" title={this.props.match.params.meetingType}></Header>
        <div style={style.searchBlock}>
          <Searchblock></Searchblock>
        </div>
        <div style={{margin:'105px 0px 55px 0px',}}>
        {this.getListHtml()}
        </div>
      </div>

    )
  }
  componentDidMount(){
    console.log(this.props);
  }

}
