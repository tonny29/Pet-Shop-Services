import React from 'react';
import CatFood from '../CatFood/CatFood';
import DogFood from '../DogFood/DogFood';
import Food from '../Food/Food';
import Home from '../Home/Home';

const HomeMain = () => {
    return (
        <div>
            <Home></Home>
            <Food></Food>
            <DogFood></DogFood>
            <CatFood></CatFood>
        </div>
    );
};

export default HomeMain;