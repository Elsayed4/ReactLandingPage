import React from 'react';
import Carrousal from '../Carrousal';
import CouterDown from '../Header_Footer/CouterDown';
const Slider = () => {
    return (
        <React.Fragment>
            <div style={{
                position:'relative',
               
            }}>
            
            <Carrousal />
              <div className="artist_name">
                <div className="wrapper">
                   Ariana grande
                </div>
              </div>
            
            <CouterDown />
              </div>
        </React.Fragment>

        )};

export default Slider;