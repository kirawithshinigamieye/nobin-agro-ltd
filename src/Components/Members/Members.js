import React from 'react';
import img from './BG 2.5.png';
import img1 from './BG 1.png';
import img2 from './Mask Group-3.png';
import img3 from './Mask Group-2.png';
import img4 from './Mask Group-1.png';
import img5 from './Mask Group.png';
import img6 from './Rectangle 13.png';
import img7 from './Group 148.png';
import './Members.css';
import { Link } from 'react-router-dom';

const Members = () => {
    return (
        <div>
            <div className="d-flex justify-content-between pt-0 mt-0">
                <div>
                    <img src={img} alt="" srcset="" />
                </div>
                <div>
                    <img src={img1} alt="" srcset="" />
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-center">
                    <div>
                        <h1 className="text-center">আমাদের সদস্যবৃন্দ</h1>
                        <div className="small-line"></div>
                    </div>
                </div>
                <div className="members">
                    <div className="member-card">
                    <Link to=""><div className="d-flex justify-content-center">
                            <img className="member-img" src={img2} alt="" srcset="" />
                        </div></Link>
                        <div className="text-center">
                            <h2>সোয়াইব সাদিক নবীন</h2>
                            <h4>ফাউন্ডার, নবীন এগ্রো লিমিটেড</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={img6} alt="" srcset="" /> 
                            </div>
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="member-card">
                    <Link to=""><div className="d-flex justify-content-center">
                            <img className="member-img" src={img3} alt="" srcset="" />
                        </div></Link>
                        <div className="text-center">
                            <h2>শেখ সাব্বির আহমেদ</h2>
                            <h4>মার্কেটার, নবীন এগ্রো লিমিটেড</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="member-card">
                    <Link to=""><div className="d-flex justify-content-center">
                            <img className="member-img" src={img4} alt="" srcset="" />
                        </div></Link>
                        <div className="text-center">
                            <h2>মোঃ জারিন</h2>
                            <h4>ডেভেলপার, নবীন এগ্রো লিমিটেড</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="member-card">
                    <Link to=""><div className="d-flex justify-content-center">
                            <img className="member-img" src={img5} alt="" srcset="" />
                        </div></Link>
                        <div className="text-center">
                            <h2>রুদ্র আহনাফ রোদ</h2>
                            <h4>ডিজাইনার, নবীন এগ্রো লিমিটেড</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                            <div>
                                <img src={img6} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to="" className="btn member-all">সকল সদস্য</Link>
                <br /><img className="mt-5" src={img7} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Members;