import React from 'react';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='homeimg'>
            <img src="https://www.understandinganimalresearch.org.uk/files/9015/8333/7886/Neutering_pets_-_puppy.png" alt="" />
            <div class="text-block">
            <h1>Hi, we are <br /> <span style={{color:"rgb(243, 170, 170)"}}>Pawsitive</span> </h1>
            <p>PREMIUM AIR-DRIED, LOCALY PRODUCED <br /> TASTY & FRESH PET FOOD</p>
            <button>For Dog</button>
            <button>For Cat</button>
            </div>
            
            </div>
           
        </div>
    );
};

export default Home;