import React from 'react';
import Business from './business';

function BusinessList() {
    const list = [1, 2, 3, 4, 5, 6, 7];

    function convToColumn(l) {
        const len = l.length;
        let divs = []
        for (let i = 0; i < len; i+=3) {
            let cols = []
            for (let j = 0; j < Math.min(i+3, len)-i; j++) {
                cols.push(<div className="list-column"><Business /></div>);
                console.log(l[i+j]);
            }
            divs.push(<div className="list-row">{cols}</div>);
        }
        return divs;
    }

    return (
        <div>  
            {convToColumn(list)}
        </div>
    );
}

export default BusinessList;