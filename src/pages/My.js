import React from 'react';
import { Header } from '../components/Header.js';
import { Imgtext } from '../components/Imgtext.js';
import { Tablist } from '../components/Tablist.js';
import { Sliderimg } from '../components/Sliderimg.js';
import { More } from '../components/More.js';
import { Item1 } from '../components/Item1.js';
import { Bottomnav } from '../components/Bottomnav.js';
export class My extends React.Component{
  constructor(props){
    super(props);
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
        <Header className="fix"  title="我的"></Header>
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
          <Tablist></Tablist>
        </div>
        <div style={style.w30}>
          <More></More>
        </div>
        <div style={{marginBottom:'55px',}}>
          <Item1></Item1>
          <Item1></Item1>
          <Item1></Item1>
          <Item1></Item1>
          <Item1></Item1>
        </div>
        <Bottomnav index="5"></Bottomnav>
      </div>

    )
  }
  componentDidMount(){

  }

}
