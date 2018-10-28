import React from 'react';
import { Header } from '../components/Header.js';
import { Imgtext } from '../components/Imgtext.js';
import { Tablist } from '../components/Tablist.js';
import { Searchblock } from '../components/Searchblock.js';
import { More } from '../components/More.js';
import { Item2 } from '../components/Item2.js';
import { Bottomnav } from '../components/Bottomnav.js';
import { Titleblock } from '../components/Titleblock.js';
import { Someinfoblock} from '../components/Someinfoblock.js';
import { Contentblock} from '../components/Contentblock.js';
import { Commentsblock} from '../components/Commentsblock.js';

import { PropTypes } from 'prop-types';

export class Meetinginfo extends React.Component{
  constructor(props){
    super(props);
    this.state={
     
    };
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
      <div className="main-container" style={{fontSize:"16px",width:"100%",height:"100%",padding:"8px 8px 0px 8px",}}>
        <Header className="fix" title="详情"></Header>
        <div style={{margin:'60px 0px 0px 0px',}}>
          <Titleblock></Titleblock>
        </div>
        <Someinfoblock></Someinfoblock>
        <Contentblock style={{marginTop:'10px'}}></Contentblock>
        <Commentsblock></Commentsblock>
      </div>

    )
  }
  componentDidMount(){

  }

}
//类型检测，必须放在组件的后面
Meetinginfo.propTypes = {
  // id:PropTypes.string.isRequired,
}
