import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
                <Nav className="mx-auto">
                    <Link className='nav-link' to='/home'>Home</Link>
                    <Link className='nav-link' to='/reviews'>Reviews</Link>
                    <Link className='nav-link' to='/dashboard'>Dashboard</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;