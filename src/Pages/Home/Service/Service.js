import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img,description,price} = service;
    return (
        <div className='service'>
            <img src={img} alt=''></img>
            <h2>This is service:{name}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <button>Book:{name}</button>
            
        </div>
    );
};

export default Service;