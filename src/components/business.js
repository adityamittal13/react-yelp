import React from 'react';
import pizza from '../images/pizza.jpeg';

function Business(props) {
    const data = props.businessInfo;
    const info = { 
        imageSrc : data.image_url,
        address : data.location.address1,
        name : data.name,
        city : data.location.city,
        state : data.location.state, 
        zipcode : data.location.zip_code,
        category : data.categories[0].title,
        rating: data.rating,
        reviewcount: data.review_count,
        link: data.url
    };

    return (
        <div className="business-padding">
            <img src={info.imageSrc} className="business-img" />
            <h2 className="business-header">
                <a href={info.link} className="business-link" target="_blank" rel="noopener noreferrer">{info.name}</a>
            </h2>

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