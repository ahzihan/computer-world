import React from 'react';
import useRatings from '../../hooks/useRatings';
import Cart from '../Cart/Cart';
import './Reviews.css';

const Reviews = () => {
    const [ ratings, setRatings ] = useRatings();
    return (
        <div>
            <h2 className='text-center mt-3'>Welcome to review page</h2>
            <div className='rating-container container my-5'>
                {
                    ratings.map( rating => <Cart rating={rating}></Cart> )
                }
            </div>
        </div>
    );
};

export default Reviews;