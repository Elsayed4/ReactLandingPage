import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Mybttom from '../Ui/Mybttom';
export default class Discount extends Component {
    
    state = {
      discountstart:0 ,
      discountend:30 ,

    }

    porcentage =() =>{
     if(this.state.discountstart < this.state.discountend){
         this.setState({
            discountstart: this.state.discountstart + 1
         })
     }
   } 

componentDidUpdate(){
    setTimeout(
        () =>{ this.porcentage()} 
   ,50)
}

    render() {
     return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
         <Fade onReveal = {() =>{ this.porcentage() }}>
          <div className="discount_porcentage">
            <span> {this.state.discountstart}%</span>
            <span> OFF </span>
          </div>
         </Fade>

          <Slide top>
          <div className="discount_description">
            <h3>Lorem Text Ipsom Lorem Text Ipsom</h3>
            <p>Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom
            Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom Lorem Text Ipsom
            </p>
            <Mybttom text="Hellow" 
            color="#fff" 
            bk="blue"
            link="http://www.google.com"
            />
          </div>
        </Slide>
          </div>        
      </div>

        )
    }
}
