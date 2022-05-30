import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useRatings from '../../hooks/useRatings';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [ ratings, setRatings ] = useRatings();
    return (
        <div>
            <div className='d-flex my-5 main-container'>
                <div className="col-md-7 col-sm-12 header-left">
                    <h2>Welcome To Computer World</h2>
                    <h2 className='default-color'>Chose Your Favourite Model</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat officiis ut blanditiis, dolorum ipsam, voluptatibus molestiae quia magnam dignissimos modi, ab tempora quaerat libero repudiandae necessitatibus omnis impedit sapiente eum asperiores maiores eveniet tenetur? Repudiandae similique possimus perferendis? Laudantium, libero!</p>
                    <button className='btn btn-default bg-primary text-white'>Live Demo</button>
                </div>
                <div className="header-right text-center col-md-5 col-sm-12">
                    <img src="https://m.media-amazon.com/images/I/71ehzrGUO7L._AC_SL1500_.jpg" alt="" />
                </div>
            </div>
            <section>
                <div className="rating-section container">
                    <h2 className='text-center'>Customer Ratings</h2>
                    <div className='rating-container mb-3 mt-5'>
                        {
                            ratings.map( rating => <Cart rating={rating}></Cart> )
                        }
                    </div>
                    <div className='text-center mb-5'>
                        <Link to='/reviews'>
                            <button>View All <span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;