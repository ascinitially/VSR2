import React from "react";
import veggiemain from "./veggiemain.jpg";
import veggiehand from "./handwithveggies.jpg";
import carrotswoman from "./womanwithcarrots.jpg";
import { Slide } from 'react-slideshow-image';
import logo from './veggieswap.png';



// slideshow properties
const slideImages = [
    veggiemain,
    veggiehand,
    carrotswoman
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
   
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
  
  }

  const slideStyle = {
    height:200
  }
  const Slideshow = () => {
      return (
        <div>    
            <div className= "text-center" style = {{
                backgroundImage: `url(${logo})`,
                backgroundRepeat: "no-repeat",
                padding: 50,
                margin: 20,
                
            }}>
            </div>
            <Slide {...properties}>
            <div className="each-slide">
            
                <div style={{'backgroundImage': `url(${slideImages[0]})`,
                            'height': 500,
                            'background-size': 'cover',
                            'background-repeat': 'no-repeat',
                            
            }}>
                    <span class="title">TRADE VEGGIES</span>
                </div>
            </div>
            <div className="each-slide" style={slideStyle}>
                <div style={{'backgroundImage': `url(${slideImages[1]})`,
                            'height':500,
                            'background-repeat': 'no-repeat',
                        
                            'background-size': 'cover',
                            
            }}>
                <span class="title">GROW A COMMUNITY</span>
                </div>
            </div>
            <div className="each-slide" style={slideStyle}>
                <div style={{'backgroundImage': `url(${slideImages[2]})`,
                            'height':500,
                            'background-size': 'cover',
                            'background-repeat': 'no-repeat',
                            'object-fit': 'fill',
            }}>
                <span class="title">MEET YOUR NEIGHBORS</span>
                </div>
            </div>
            </Slide>
        </div>
      )
  }

  export default Slideshow;