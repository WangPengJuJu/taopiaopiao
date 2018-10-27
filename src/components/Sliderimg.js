import React from 'react';
import "../css/Sliderimg.css";
import "../css/aui-slide.css"
import "../css/aui.css"
export class Sliderimg extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }


  render(){
    const style = {

    }
    return(
      <section className="" style={{marginTop:"50px"}}>
      	<div id="aui-slide">
      	    <div id="imgList" className="aui-slide-wrap" >
      	        <div className="aui-slide-node bg-dark">
      	            <img src="../src/images/slider1.jpg"  height="6rem" width="100%"/>
      	        </div>
      	        <div className="aui-slide-node bg-dark">
      	            <img src="../src/images/slider2.jpg"  height="120px" width="100%"/>
      	        </div>
      	        <div className="aui-slide-node bg-dark">
      	            <img src="../src/images/slider3.jpg"  height="120px" width="100%"/>
      	        </div>
      	    </div>
      	    <div className="aui-slide-page-wrap"></div>
      	</div>
      </section>
    )
  }
  componentDidMount(){
    var slide = new auiSlide({
        container:document.getElementById("aui-slide"),
        // "width":300,
        "height":200,
        "speed":300,
        "autoPlay": 3000, //自动播放
        "pageShow":true,
        "pageStyle":'dot',
        "loop":true,
        'dotPosition':'center',
    })
  }

}
