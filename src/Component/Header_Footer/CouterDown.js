import React, { Component } from 'react'

import Slide from 'react-reveal/Slide';


export default class CouterDown extends Component {

    state = {
        deadline:'Dec, 3, 2022',
        day:'0',
        hour:'0',
        min:'0',
        sec:'0'
    }

     setTimer = ( deadl ) =>{
        
     const time = Date.parse(deadl) - Date.parse(new Date());
      if(time < 0){
        console.log("Passed");
      }
      else{
      const sec = Math.floor((time / 1000) % 60);
      const min = Math.floor((time / 1000 / 60) % 60);
      const hour = Math.floor(time / (1000 * 60 * 60 ) % 24);
      const day = Math.floor(time / (1000 * 60 * 60 * 24) % 24);
      this.setState({
        sec,
        min,
        hour,
        day
      })

    }

       
    }

    componentDidMount(){
      setInterval(() => this.setTimer(this.state.deadline) ,1000)
    }

    render() {
        return (
            <Slide left delay="1000"> 
            <div className="countdown_wrapper">
                <div className="countdown_top">
                  Event Starts in
                </div>

                <div className="countdown_bottom">

                  <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.day}
                    </div>
                    <div className="countdown_tag">
                    Day
                    </div>

                  </div>
                  <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.hour}
                    </div>
                    <div className="countdown_tag">
                    Hs
                    </div>

                  </div>
                  <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.min}
                    </div>
                    <div className="countdown_tag">
                    Min
                    </div>

                  </div>
                  <div className="countdown_item">
                    <div className="countdown_time">
                    {this.state.sec}
                    </div>
                    <div className="countdown_tag">
                    sec
                    </div>

                  </div>


                  
                </div> 
            </div>
         </Slide>
        )
    }
}
