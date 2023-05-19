import React from 'react';

function Business() {
    const info = { 
        imageSrc : "/logo192.png",
        address : "1010 Paddington Way",
        name : "MarginOtto Pizzeria",
        city : "Bordertown",
        state : "NY", 
        zipcode : 10101,
        category : "ITALIAN",
        rating: 4.5,
        reviewcount: 90
    };

    return (
        <div>
            <img src={info.imageSrc} />
            <h1>{info.name}</h1>
            <p>{info.address}</p>
            <p>{info.city}</p>
            <p>{`${info.state} ${info.zipcode}`}</p>
            <p>{info.category}</p>
            <p>{`${info.rating} stars`}</p>
            <p>{`${info.reviewcount} reviews`}</p>
        </div>
    );
}

export default Business;