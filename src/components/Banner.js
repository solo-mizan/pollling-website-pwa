import React from 'react';
import { Link } from 'react-router-dom';
import BannerPic from '../assets/Banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={BannerPic} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Cast Your Vote Now!</h1>
                        <p className="py-6">The mature Indus civilisation flourished from about 2600 to 1900 BCE, marking the beginning of urban civilisation on the Indian subcontinent. The civilisation included cities such as Harappa, Ganeriwala, and Mohenjo-daro in modern-day Pakistan, and Dholavira, Kalibangan, Rakhigarhi, and Lothal in modern-day India.</p>
                        <Link className='btn btn-accent m-10' to='/vote'>Click here to Vote!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;