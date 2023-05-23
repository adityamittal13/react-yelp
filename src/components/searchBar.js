import React from 'react';
import cooking from '../images/cooking.jpg';

function SearchBar() {
    return (
        <div className="searchBar-container">
            <img src={cooking} className="searchBar-img"/>
            <form className="searchBar-form" action="#">
                <div className="searchBar-row">
                    <div className="searchBar-column"><p className="searchBar-col">Best Match</p></div>
                    <div className="searchBar-column"><p className="searchBar-col">Highest Rated</p></div>
                    <div className="searchBar-column"><p className="searchBar-col">Most Reviewed</p></div>
                </div>
                <hr className="searchBar-hr" />
                <input className="searchBar-input" type="text" placeholder="Search Businesses"></input>
                <input className="searchBar-input" type="text" placeholder="Where?"></input>
                <button className="searchBar-submitButton">Let's Go</button>
            </form> 
        </div>
    )
}

export default SearchBar; 