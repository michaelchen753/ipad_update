import React, { useEffect, useState } from 'react';
import { ReactComponent as LeftCaret } from '../../assets/left_caret.svg';
import { ReactComponent as RightCaret } from '../../assets/right_caret.svg';
import './slide-controller.css';

const SlideController =({content})=>{
    const [activeIndex, setActiveIndex] = useState(1); 
    const [nextTitle, setNextTitle] = useState(content[2].title);
    const [prevTitle, setPrevTitle] = useState(content[0].title);
    const next = () => {      
      const nextIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
      
    const previous = () => {     
      const nextIndex = activeIndex === 0 ? content.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
    
    useEffect(() => {
        const pTitle = activeIndex === 0 ? content[content.length - 1].title : content[activeIndex-1].title
        setPrevTitle(pTitle);
        const nTitle = activeIndex === content.length -1 ? content[0].title : content[activeIndex+1].title
        setNextTitle(nTitle);
      }, [activeIndex]);

    return(
        <div className="slide-controller">                           
            <ul className="pagination mypage">
              <li className='justify-content-start mypage-left'><a className='h4'  onClick ={previous} ><LeftCaret /><u>{prevTitle}</u></a></li>
              <li className='justify-content-end mypage-right'><a className='h4'  onClick ={next} ><u>{nextTitle}</u><RightCaret /></a></li>
            </ul>
          </div>
    )
}

export default SlideController;