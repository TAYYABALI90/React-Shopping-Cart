import React from 'react';

import logo from './logo.png';

import { Link } from 'react-router-dom';

import { CartState } from '../../context/Context';

import './navbar.css';

const Navbar = () => {

    const { cart } = CartState();

    return (

        <>

            <div className='sale-tag'>

                <div className="left-content">
                    <h6>Mega March Sale Flate</h6> <h6>25% OFF</h6>
                </div>

                <div className="right-content">

                    <div className="dropdown">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span> USD $</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">EUR #</a></li>
                            <li><a className="dropdown-item" href="/">USD $</a></li>
                        </ul>
                    </div>
                    |
                    <div className="dropdown user-dropdown">
                        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>My Account</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Create An Account</a></li>
                            <li><a className="dropdown-item" href="/">Sign In</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className="search-logo-cart">

                <div className="left-content">
                    <div className="input-group mb-3">
                        <input type="text" className="" placeholder="Search" />
                        <span className="input-group-text"><i className="bi bi-search" /></span>
                    </div>
                </div>

                <div className="middle-content">
                    <img src={logo} alt="" />
                    <h4>FASHION STORE</h4>
                </div>

                <Link to='/cart' className="right-content">
                    <i className="bi bi-cart" />
                    <div className='my-cart'>
                        <h6>MY CART</h6>
                        <h6>{cart.length} Item(S)</h6>
                    </div>
                </Link>

            </div>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link text-white fw-bold text-uppercase mx-2">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/shop' className="nav-link text-white fw-bold text-uppercase mx-2">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/electronics' className="nav-link text-white fw-bold text-uppercase mx-2">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sports' className="nav-link text-white fw-bold text-uppercase mx-2">Sports & Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/sale' className="nav-link text-white fw-bold text-uppercase mx-2">Sale</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link text-white fw-bold text-uppercase mx-2">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )

}

export default Navbar;