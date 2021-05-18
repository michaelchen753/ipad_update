import React from 'react'
import './header.css';



const Header = ({data, isHidden, toggle})=>{
    return(
    <div className='header' onClick={toggle} >
        <div className='header-content'>
            <span className='main-item'>{data[0].title}</span>
            <span className='arrow'>{isHidden? '&#128070;':'&#128071;'}</span>
        </div>
    </div>
)}

export default Header;