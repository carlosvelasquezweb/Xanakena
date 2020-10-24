import React from 'react';

function Lista(props) {
    
    return <li>
        <div>
            <h4>{props.name}</h4>
            <p>{props.price}</p>      
        </div></li>
    
}

export default Lista;