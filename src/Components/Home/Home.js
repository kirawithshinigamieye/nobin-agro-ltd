import React from 'react';
import Carousel from '../Carousel/Carousel';
import Members from '../Members/Members';
import Services from '../Services/Services';
import TopBlogs from '../TopBlogs/TopBlogs';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className="horizontal-line">

            </div>
            <Services></Services>
            <div className="horizontal-line">

            </div>
            <TopBlogs></TopBlogs>
            <Members></Members>
        </div>
    );
};

export default Home;