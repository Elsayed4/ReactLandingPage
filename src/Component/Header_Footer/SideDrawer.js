import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {scroller} from 'react-scroll';

const SideDrawer = (props) => {


const scrollToElements = (element) => {
  scroller.scrollTo(element,{
      duration:1500,
      delay:100,
      smooth:true,
      offset:-110,
      
  })
  props.onClose(false);
}

    return (
        <div>
        <Drawer
         anchor="right"
         open={props.open}
         onClose={() =>props.onClose(false)}
        >
        
        <List component="nav">
          <ListItem button onClick={() => scrollToElements("featured")}>
           Event Start in 
          </ListItem>

          <ListItem button onClick={() => scrollToElements("Venoinfo")}>
           Veno info 
          </ListItem>

          <ListItem button onClick={() => scrollToElements("HeightLight")}>
          Height light
         </ListItem>

         <ListItem button onClick={() => scrollToElements("Pricing")}>
         Pricing 
        </ListItem>


        <ListItem button onClick={() => scrollToElements("Location")}>
        Location 
       </ListItem>


        </List>
        </Drawer> 
        </div>
    );
};

export default SideDrawer;