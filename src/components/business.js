import React from 'react';

function Business(props) {
    const data = props.businessInfo;

    function clickHandler() {
        const elem = document.getElementById(data.id);
        if (elem.innerHTML === "Favorite") {
            elem.innerHTML = "Unfavorite";
            props.setSaved(prev => [data, ...prev]);
        } else {
            elem.innerHTML = "Favorite";
            props.setSaved(prev => prev.filter(value => value.id !== data.id));
        }
    }

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
        link: data.url,
        phone: data.display_phone.replace(" ", "")
    };

    const favoriteText = (props.saved.some(savedItem => data.id === savedItem.id)) ? "Unfavorite" : "Favorite";
    
    const splitAddress = info.address ? info.address.split(" ") : [];
    const splitCity = info.city ? info.city.split(" ") : [];
    const fullAddress = [...splitAddress, ...splitCity, info.state, info.zipcode].join("+");
    const mapsRedirect = `https://www.google.com/maps/place/${fullAddress}`;

    return (
        <div className="business-padding">
            <a href={info.link} target="_blank" rel="noopener noreferrer"><img src={info.imageSrc} className="business-img" alt={data.id}/></a>
            <h2 className="business-header">
                <a href={info.link} className="business-link" target="_blank" rel="noopener noreferrer">{info.name}</a>
            </h2>

            <div className="business-row">
                <div className="business-column">
                    <p>
                        <a href={mapsRedirect} className="business-link" target="_blank" rel="noopener noreferrer">{info.address}</a>
                    </p>
                </div>
                <div className="business-column business-right">
                    <h3 className="business-fancy">{info.category}</h3>
                </div>
            </div>
            <div className="business-row">
                <div className="business-column">
                    <p>
                        <a href={mapsRedirect} className="business-link" target="_blank" rel="noopener noreferrer">{info.city}</a>
                    </p>
                </div>
                <div className="business-column business-right">
                    <p className="business-fancy">{`${info.rating} stars`}</p>
                </div>
            </div>
            <div className="business-row">
                <div className="business-column">
                    <p>
                        <a href={mapsRedirect} className="business-link" target="_blank" rel="noopener noreferrer">{`${info.state} ${info.zipcode}`}</a>
                    </p>
                </div>
                <div className="business-column business-right">
                    <p>{`${info.reviewcount} reviews`}</p>
                </div>
            </div>
            <div className="business-row">
                <div className="business-column">
                    <button className="business-button" type="submit" onClick={clickHandler} id={data.id}>{favoriteText}</button>
                </div>
                <div className="business-column business-right">
                    <p>{info.phone}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;