/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import img from './Nobin-Agro-Logo-Final.png';

const Header = () => {
    const activeStyle = {
        backgroundColor: '#57B902',
        borderRadius: '5px',
        color: 'white'
    }
    return (
        <div className="d-flex justify-content-center">
            <header className="text-center d-flex">
                <NavLink to="/home" className="navbar-brand ms-lg-5 ps-xxl-5 pe-xxl-5 me-xxl-5"><img src={img} alt="" srcset=""/></NavLink>

                <div className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div className="offset-xl-2 ps-xxl-5 links collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                <NavLink to="/home" className="link nav-item nav-link" activeStyle={activeStyle}>হোমপেজ</NavLink>
                <NavLink to="/gallery" className="link nav-item nav-link" activeStyle={activeStyle}>গ্যালারি</NavLink>
                <NavLink to="/members" className="link nav-item nav-link" activeStyle={activeStyle}>সদস্যবৃন্দ </NavLink>    
                <NavLink to="/blog" className="link nav-item nav-link" activeStyle={activeStyle}>ব্লগ</NavLink>
                <NavLink to="/support" className="link nav-item nav-link text-nowrap" activeStyle={activeStyle}>লাইভ সাপোর্ট</NavLink>
                </div>
            </div>
                    </div>

                </div>
                
            </header>
        </div>
    );
};

export default Header;