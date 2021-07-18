import React from 'react';

const Location = () => {
    return (
        <div className = "location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109682.24981467925!2d31.070416598088375!3d30.786637252838688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c96f2db77ea9%3A0xe600de1b644371a9!2zNTgg2LTYp9ix2Lkg2LPYudivINin2YTYr9mK2YbYjCDYt9mG2LfYpyAo2YLYs9mFIDIp2Iwg2LfZhti32KfYjCDYp9mE2LrYsdio2YrYqQ!5e0!3m2!1sar!2seg!4v1625974065043!5m2!1sar!2seg"
        width="99.7%"
        height="450" 
        loading="lazy"></iframe>
        
        <div className="location_tag">
          <div>Location</div>
        </div>

         </div>
    );
};

export default Location;