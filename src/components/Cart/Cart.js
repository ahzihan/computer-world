import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './Cart.css';

const Cart = ( props ) => {
    const { image, name, text, rating } = props.rating;

    const first = {
        size: 20,
        value: 3.5,
        edit: true
    };


    return (
        <div className='cart col-sm-12'>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{text}</p>
            <ReactStars classNames='text-center' {...first}></ReactStars>
        </div>
    );
};

export default Cart;