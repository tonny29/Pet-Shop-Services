import React, { useEffect, useState } from 'react';
import Foods from '../Foods/Foods';
import './CatDogFood.css';

const CatDogFood = () => {
    const [food,setFood]=useState([]);
    useEffect(()=>{
        fetch('./Petsfood.json')
        .then(res=>res.json())
        .then(data=>setFood(data))
    },[])
    return (
        <div>
            <div className='all-food'>
            <h1>ALL <span style={{color:'brown'}}>AIR-DRIED FOOD</span> FOR PETS</h1>
            <p>Inspired by the centuries-old technique of naturally preserving meats, ready to serve <br /> raw-inspired foods with nature’s goodness locked in.</p>
        </div>
        <div className='display-grid'>
            {
                food.map(food=><Foods food={food}></Foods>)
            }
        </div>
        </div>
    );
};

export default CatDogFood;