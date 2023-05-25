import React, { useState } from 'react';
import cooking from '../images/cooking.jpg';

function SearchBar() {
    const [business, setBusiness] = useState("");
    const [location, setLocation] = useState("");
    const [sort, setSort] = useState("bm");

    function clickHandler(message) {
        const prevElem = document.getElementById(sort);
        const prevHr = document.getElementById(`${sort}_`);
        const newElem = document.getElementById(message);
        const newHr = document.getElementById(`${message}_`);
        prevElem.className = "searchBar-col";
        prevHr.className = "searchBar-hr";
        newElem.className = "searchBar-col searchBar-clicked";
        newHr.className = "searchBar-hr searchBar-clickedhr";
        setSort(message);
    }

    function businessChange({target}) {
        setBusiness(target.value);
    }

    function locationChange({ target }) {
        setLocation(target.value);
    }

    function submitHandler(event) {
        event.preventDefault();

        if (!business && !location) {
            alert("Please enter a valid business and location.");
        } else if (!business) {
            alert("Please enter a valid business.");
        } else if (!location) {
            alert("Please enter a valid location.");
        } else {
            let selection;
            switch (sort) {
                case "bm":
                    selection = "best_match";
                    break;
                case "hr":
                    selection = "highest_rated";
                    break;
                default:
                    selection = "most_reviewed";
                    break;
            }
        
            console.log(`Searching Yelp with ${business}, ${location}, ${selection}`);
        }
    }

    return (
        <div className="searchBar-container">
            <img src={cooking} className="searchBar-img"/>
            <form className="searchBar-form" onSubmit={submitHandler}>
                <div className="searchBar-row">
                    <div className="searchBar-column">
                            <button className="searchBar-col searchBar-clicked" id="bm" onClick={() => clickHandler("bm")}>Best Match</button>
                            <hr className="searchBar-hr searchBar-clickedhr" id="bm_" />
                    </div>
                    <div className="searchBar-column">
                            <button className="searchBar-col" id="hr" onClick={() => clickHandler("hr")}>Highest Rated</button>
                            <hr className="searchBar-hr" id="hr_" />
                    </div>
                    <div className="searchBar-column">
                            <button className="searchBar-col" id="mr" onClick={() => clickHandler("mr")}>Most Reviewed</button>
                            <hr className="searchBar-hr" id="mr_" />
                    </div>
                </div>
                <input className="searchBar-input" type="text" placeholder="Search Businesses" value={business} onChange={businessChange}></input>
                <input className="searchBar-input" type="text" placeholder="Where?" value={location} onChange={locationChange}></input>
                <button className="searchBar-submitButton">Let's Go</button>
            </form> 
        </div>
    )
}

export default SearchBar; 