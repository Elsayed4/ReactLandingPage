import React, { Component } from 'react';
import "../../Resourses/styles.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
 import IconButton from '@material-ui/core/IconButton';

 import SideDrawer from '../Header_Footer/SideDrawer';

export default class Header extends Component {

    state = {
        drawerOpen :false,
        textBackground:false
    }

    toggleDrawer = (value) =>{
        this.setState({
          drawerOpen: value  
        })
    }

    

componentDidMount = () =>{
    window.addEventListener('scroll', this.handlescroll);
}

  handlescroll = () =>{
      if(window.scrollY > 0 ){
        this.setState({
            textBackground: true  
          })
  
      }else{
        this.setState({
            textBackground: false  
          })

      }
  }



    render() {
        return (
            <div>
                <AppBar position="fixed"
                 style={{
                     backgroundColor: this.state.textBackground ? "#2f2f2f" : "transparent" ,
                     padding:"5px 0"
                 }}>
               
                <Toolbar>
                <div className="header_logo">
                      <div className="font_righteous header_logo_venue">The Venue</div>
                      <div className="header_logo_title">Musical Event</div>
            </div>
        
                  
                    <IconButton 
                    aria-label="Menu"
                    color="inherit"
                    onClick={ () => this.toggleDrawer(true)}
                    >
                          <MenuIcon/>
                      </IconButton>
                      <SideDrawer 
                       open={this.state.drawerOpen}
                       onClose={(value) =>this.toggleDrawer(value)}
                      />
                  </Toolbar>

                </AppBar>

                
            </div>
        )
    }
}
