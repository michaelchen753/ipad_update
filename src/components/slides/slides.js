import React from 'react';
import Slide from '../slide/slide';
import SlideController from '../slide-controller/slide-controller';

import './slides.css';

const Slides = ({content}) => {      
   
      return ( 
        <div>
          <div>
            {
            content.map((slide=>{
              return <Slide key={slide.title} description={slide.description} />
            }))
            }
          </div>          
          <SlideController content={content}/>
        </div>
      );
        }


  export default Slides;