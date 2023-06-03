import React from 'react';
import Business from './business';

function BusinessList(props) {
    function convToColumn(l) {
        const len = l.length;
        let divs = []
        for (let i = 0; i < len; i+=3) {
            let cols = []
            for (let j = 0; j < Math.min(i+3, len)-i; j++) {
                cols.push(<div className="list-column">
                    <Business key={l[i+j].id} businessInfo={l[i+j]} saved={props.saved} setSaved={props.setSaved}/></div>);
            }
            divs.push(<div className="list-row">{cols}</div>);
        }
        return divs;
    }

    return (
        <div>  
            {convToColumn(props.businesses)}
        </div>
    );
}

export default BusinessList;