import React from 'react';
import Slider from "react-slick";
import slide_one from "../Resourses/images/slide_one.jpg";
import slide_two from "../Resourses/images/slide_two.jpg";
import slide_three from "../Resourses/images/slide_three.jpg";

const Carrousal = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }

    return (
        <div >
            <div className="carrousel-wrapper"
             style={{
                 height:`${window.innerHeight}px`,
                 overflow:"hidden"
             }}
            >
            
            <Slider
             {...settings}
            >
               <div className="carrousel-image">
                 <div 
                   style={{
                    background:`url(${slide_one})`,
                    height:`${window.innerHeight}px`,
                   }}
                 >
                 </div>

               </div>


               <div className="carrousel-image">
                 <div 
                   style={{
                    background:`url(${slide_two})`,
                    height:`${window.innerHeight}px`,
                   }}
                 >
                 </div>

               </div>

               <div className="carrousel-image">
                 <div 
                   style={{
                    background:`url(${slide_three})`,
                    height:`${window.innerHeight}px`,
                   }}
                 >
                 </div>

               </div>
               

            </Slider>

            </div>
        </div>
    );
};

export default Carrousal;