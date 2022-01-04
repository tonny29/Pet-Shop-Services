import React from 'react';
import CatDogFood from '../CatDogFood/CatDogFood';
import CatFood from '../CatFood/CatFood';
import DogFood from '../DogFood/DogFood';
import Footer from '../Footer/Footer';
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
            <Footer></Footer>
        </div>
    );
};

export default HomeMain;