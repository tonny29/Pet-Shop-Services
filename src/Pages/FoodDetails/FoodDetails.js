import React from 'react';
import { useParams } from 'react-router-dom';
import fakedata from '../FakeDataForDetail/FakeData';

const FoodDetails = () => {
    const {detailId}=useParams();
    const details=fakedata.find(data=>data.id===parseInt(detailId));
    return (
        <div>
            <h1>this is detail page: {detailId}</h1>
            <h3>Name: {details.name}</h3>

            <img src={details.image} alt="" style={{
                height: "400px", width: "400px",marginTop: "20px"
            }} />
        </div>
    );
};

export default FoodDetails;