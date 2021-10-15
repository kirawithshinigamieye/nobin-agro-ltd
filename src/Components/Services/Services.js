import React from 'react';
import './Services.css';
import animation1 from '../Nobin/Animation/22573-plant-sprouting-from-hand.gif';
import animation2 from '../Nobin/Animation/24705-fruit-and-vegetable-animation.gif';
import animation3 from '../Nobin/Animation/19152-gardening.gif';
import animation4 from '../Nobin/Animation/66890-covid-19-cleanup.gif';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div>
                    <h1 className=" mt-5">আমাদের সেবা সমূহ</h1>
                    <div className="small-line "></div>
                </div>
            </div>
            <div className="d-flex justify-content-center services">
                <Link to="" className="service-link"><div className="service-card">
                    <img className="service-animation" src={animation1} alt="" srcset="" />
                    <h3 className="text-center">বীজ ও চারা</h3>
                </div></Link>
                <Link to="" className="service-link"><div className="service-card">
                    <img className="service-animation" src={animation2} alt="" srcset="" />
                    <h3 className="text-center">ফল-ফলাদি</h3>
                </div></Link>
                <Link to="" className="service-link"><div className="service-card">
                    <img className="service-animation" src={animation3} alt="" srcset="" />
                    <h3 className="text-center">বাগান প্রকল্প</h3>
                </div></Link>
                <Link to="" className="service-link"><div className="service-card">
                    <img className="service-animation" src={animation4} alt="" srcset="" />
                    <h3 className="text-center">কীটনাশক ও সার</h3>
                </div></Link>
            </div>
        </div>
    );
};

export default Services;