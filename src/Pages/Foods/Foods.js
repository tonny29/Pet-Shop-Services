import React from 'react';
import './Foods.css';

const Foods = (props) => {
    const{image}=props.food;
    return (
            <div className='container'>
               <div>
              <a href="/aboutus"><img className="image-style" src={image} alt="" /></a>
               </div>
            </div>
        
    );
};

export default Foods;