import React from 'react';
import homeImg from '../../petImage/homeImage.png';

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='homeimg'>
                <div>
                    <img src={homeImg} alt="" />
                </div>
                <div class="text-block">
                    <h1>Hi, we are <br /> <span style={{ color: "rgb(373, 177, 177)" }}>Pawsitive</span> </h1>
                    <hr />
                    <br />
                    <p>Are You Here For Your Pets Food Choices <span style={{fontSize:'50px'}}>?</span>
                        Do You Want To Know How To Manage Pets<span style={{fontSize:'50px'}}>?</span> <br />
                
                    </p>
                    <button>For Dog</button>
                    <button>For Cat</button>
                </div>

            </div>

        </div>
    );
};

export default Home;