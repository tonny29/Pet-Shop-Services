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
            <p>Air-drying kills bacteria making it a safer and healthier option than raw or fresh-frozen foods, <br /> and it's not cooked at high temperatures that can destroy the flavour. Air-dried foods are made from fresh, specially selected  <br />ingredients that your dog will find easier to absorb and digest.</p>
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