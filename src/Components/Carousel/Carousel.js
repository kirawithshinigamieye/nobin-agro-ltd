import React from 'react';
import './Carousel.css';
import img1 from './WEB-temp-1-3.jpg';

const Carousel = () => {
    return (
        <div className="carousel">
            <div id="carouselExampleDark" className="carousel carousel-dark slide owl-carousel" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" id="myCarousel-indicators" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" id="myCarousel-indicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" id="myCarousel-indicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className="carousel-caption top-0">
                        <a href="" className="btn carousel-btn">ত্বীন সম্পর্কে জানুন...</a>
                    </div>
                    <img src={img1} className="d-block carousel-img w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className="carousel-caption top-0">
                        <a href="" className="btn carousel-btn">ত্বীন সম্পর্কে জানুন...</a>
                    </div>
                    <img src={img1} className="d-block carousel-img w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <div className="carousel-caption top-0">
                        <a href="" className="btn carousel-btn">ত্বীন সম্পর্কে জানুন...</a>
                    </div>
                    <img src={img1} className="d-block carousel-img w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
};

export default Carousel;