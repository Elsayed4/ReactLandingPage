import React from 'react';
import Button from '@material-ui/core/Button'; 
import Ticket from '../../Resourses/images/icons/ticket.png';
import { blue, red } from '@material-ui/core/colors';
const Mybttom = (props) => {
    return (
        <div>
          <Button variant="contained" size="small" color="primary"
           href={props.link} 
           style={{
               color:props.color,
               backgroundColor:props.bk,

           }}
           >
             <img src={Ticket} className="iconImage" alt="icon_button" />
             {props.text}
          </Button>

        </div>
    );
};

export default Mybttom;