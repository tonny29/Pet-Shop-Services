import React from 'react';
import CatDogFood from '../CatDogFood/CatDogFood';
import CatFood from '../CatFood/CatFood';
import DogFood from '../DogFood/DogFood';
import Home from '../Home/Home';
import Treatment from '../Treatment/Treatment';

const HomeMain = () => {
    return (
        <div>
            <Home></Home>
            <Treatment></Treatment>
            <DogFood></DogFood>
            <CatFood></CatFood>
            <CatDogFood></CatDogFood>
        </div>
    );
};

export default HomeMain;