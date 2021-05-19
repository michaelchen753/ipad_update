import React from 'react';
import  ipadmini from '../../assets/ipadmini.jpg';
import './slide.css';


const Slide = ({description})=>{
    return(
        <div className='container'>
          <div className='grid'>
            <div className='row'>
                <div className='col-md-4 col-sm-4'>
                    <img src={ ipadmini } className="img-fluid myimg" alt='ipad'/>
                </div>
                 <div className='col-md-8 col-sm-8'>
                    <div className='description centre'>
                      <h5 className='text-left centre ' dangerouslySetInnerHTML= {{ __html:description }}/>
                    </div>                    
                </div>      
            </div>                     
        </div>        
    </div> 
    )                                
}

export default Slide;