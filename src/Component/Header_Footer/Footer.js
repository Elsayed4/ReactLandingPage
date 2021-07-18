import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return (
        <div className="bck_red footers">
            <Fade delay={500}>
               <div className="font_righteous footer_Logo_venue">
                 The Venue .
               </div>
               <div className="footer_copyright">
                The venue All Right Reserved 2021
               </div>
            </Fade>
        </div>
    );
};
 
export default Footer;