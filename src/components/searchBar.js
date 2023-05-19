import React from 'react';

function SearchBar() {
    return (
        <div>
            <form action="#">
                <input className="col-xs-3" type="text" placeholder="Search Businesses"></input>
                <input className="col-xs-4 col-xs-offset-4" type="text" placeholder="Where?"></input>
                <button className="submitButton">Let's Go</button>
            </form>
        </div>
    )
}

export default SearchBar;