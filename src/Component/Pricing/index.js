import React, { Component } from 'react';
import Mybttom from '../Ui/Mybttom';
import Zoom from 'react-reveal/Zoom';
class Pricing extends Component{
  
  state = {
      pricings : [100,150,250],
      positions : ['Baclony' , 'Medium' , 'star'],
      desc : [' Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom 1',
      ' Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom 2',
      ' Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom 3'           
    ],
    linkto: ['https://www.facebook.com','https://www.twitter.com','https://www.youtube.com'],
    delays:[500,0,500]
  
}

showBoxs = () => {
  return(
    this.state.pricings.map((box,i) =>(
   <Zoom delay={this.state.delays[i]} >
        <div className="pricing_item">
        <div className="pricing_inner_wrapper">
           <div className="pricing_title">
             <span>${this.state.pricings[i]}</span>
             <span>{this.state.positions[i]}</span>
             
           </div>
           <div className="pricing_description">
           <span>${this.state.desc[i]}</span>
           </div>

           <div className="pricing_buttons">
           <Mybttom text="click" 
           color="#fff" 
           bk="#FFA800"
           link="http://www.google.com"
           />

           </div>
           </div>
      </div>
  </Zoom>
      )))

}

    render(){
      return(
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
           <h2>pricing</h2>
           <div className="pricing_wrapper">
              {this.showBoxs()}
           </div>
        </div>
      </div>


      );
  }

}

export default Pricing;