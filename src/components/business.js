import React from 'react';
import pizza from '../images/pizza.jpeg';

function Business() {
    const info = { 
        imageSrc : pizza,
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
        <div className="business-padding">
            <img src={info.imageSrc} className="business-img" />
            <h2 className="business-header">{info.name}</h2>

            <div className="business-row">
                <div className="business-column">
                    <p>{info.address}</p>
                </div>
                <div className="business-column business-right">
                    <h3 className="business-fancy">{info.category}</h3>
                </div>
            </div>
            <div className="business-row">
                <div className="business-column">
                    <p>{info.city}</p>
                </div>
                <div className="business-column business-right">
                    <p className="business-fancy">{`${info.rating} stars`}</p>
                </div>
            </div>
            <div className="business-row">
                <div className="business-column">
                    <p>{`${info.state} ${info.zipcode}`}</p>
                </div>
                <div className="business-column business-right">
                    <p>{`${info.reviewcount} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;