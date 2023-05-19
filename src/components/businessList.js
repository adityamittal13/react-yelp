import React from 'react';
import Business from './business';

function BusinessList() {
    const list = [1, 2, 3, 4, 5, 6];
    return (
        <div>  
            {list.map((value) => <Business />)}
        </div>
    );
}

export default BusinessList;