import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id,name,img,description,price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
       navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt=''></img>
            <h4>This is service:{name}</h4>
            <p>{description}</p>
            <p>${price}</p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>
            
        </div>
    );
};

export default Service;