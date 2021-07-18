import React from 'react';
import './App.css';
import Header from './Component/Header_Footer/Header';
import Slider from './Component/Header_Footer/Slider';
import Venuinfo from './Component/Header_Footer/Venuinfo';
import Heightlight from './Component/Heightlight/index';
import Pricing from './Component/Pricing/index';
import Location from './Component/Location/index';
import Footer from './Component/Header_Footer/Footer';
import {Element} from 'react-scroll';

function App() {
  return (
    <div className="App" style={
      {
        height:"1500px",
        backgroundColor:""
        
              }
    }>
    
    <Element name="featured">
       <Header />
    </Element> 
      <Slider />
      <Element name="Venoinfo">
          <Venuinfo />
      </Element>
      <Element name="HeightLight">
         <Heightlight />
      </Element>
      <Element name="Pricing">
         <Pricing />
      </Element>
      <Element name="Location">
        <Location />
      </Element> 
      <Footer />
      </div>
    
  );
}

export default App;
