import React from 'react';
import './TopBlogs.css';
import img1 from './fig-tree-1658686 1.png';
import img2 from './image 2.png';
import img3 from './BG 1.png';
import img4 from './BG 2.0.png';
import img5 from './BG 3.0.png';
import img6 from './Group 148.png';
import { Link } from 'react-router-dom';
const TopBlogs = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="mt-3">
                    <h1 className="text-center">টপ ব্লগস</h1>
                    <div className="small-line "></div>
                </div>
            </div>
            <div className="d-flex">
                <div className="blogs">
                    <div className="d-flex blog">
                        <div>
                            <img src={img2} alt="" srcset="" className="blog-img" />
                        </div>
                        <div className="blog-text">
                            <h2>মালটা চাষের সুবিধা</h2>
                            <p className="blog-post">বারি মাল্টা-১ বাংলাদেশে উদ্ভাবিত এক প্রকার মাল্টা ফল। বাংলাদেশের পাহাড়ি এলাকা বারি মাল্টা- ১ এর চাষাবাদের জন্য বিশেষভাবে উপযোগী। সঠিক পদ্ধতিতে বারি মাল্টা-১ চাষ করলে অধিক লাভবান হওয়া যায়।
                            চলুন জেনে নেওয়া যাক যে পদ্ধতিতে বারি মাল্টা-১ চাষে অধিক লাভবান হওয়া যায়...</p>
                            <Link to="" className="btn read-more">আরও পড়ুন...</Link>
                        </div>
                    </div>
                    <div className="d-flex blog">
                        <div>
                            <img src={img1} alt="" srcset="" className="blog-img" />
                        </div>
                        <div className="blog-text">
                            <h2>ত্বীন চাষে বেকারত্ব দূর হবে</h2>
                            <p className="blog-post">পবিত্র কোরআনে আত ত্বীন সূরায় বর্ণিত মরুভূমির মিষ্টি ফল ত্বীন এখন গাজীপুরে চাষ হচ্ছে । জেলার শ্রীপুর উপজেলার বারতোপা গ্রামে মডার্ন এগ্রো ফার্ম এ্যান্ড নিউট্রিশন নামের ফার্ম-এ ত্বীন ফলের চাষ করছে। এটি আয়তনের দিক থেকে দেশের সবচেয়ে বড় বাগান দাবি কর্তৃপক্ষের...</p>
                            <Link to="" className="btn read-more">আরও পড়ুন...</Link>
                        </div>
                    </div>
                </div>
                <div className="justify-content-end">
                    <img src={img3} alt="" srcset="" className="bg-img" />
                    <img src={img5} alt="" srcset="" className="bg-img" />
                </div>
            </div>
            <div className="d-flex justify-content-between devide">
                <div>
                    <img src={img4} alt="" srcset="" />
                </div>
                <div className="text-center">
                    <Link to="" className="btn read-more">সকল ব্লগ</Link>
                    <br/><img className="mt-5" src={img6} alt="" srcset="" />
                </div>
                <div>
                    <img src={img5} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default TopBlogs;