import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name,img,description,price} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt=''></img>
            <h4>This is service:{name}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <button className='btn btn-primary'>Book:{name}</button>
            
        </div>
    );
};

export default Service;