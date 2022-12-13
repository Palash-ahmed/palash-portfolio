import React from 'react';
import footerLogo from '../../assets/navlogo.JPG'

const Footer = () => {
    return (

        <footer className="footer footer-center p-10 bg-gray-300 text-primary-content">
            <div>
                <img src={footerLogo} className='w-16 h-16 rounded-full ring-purple-200 ring-4' alt="" />
                <h1 className='monoster-fonts my-3 text-gray-700 text-xl font-semibold text-center uppercase'> Portfolio</h1>
                <small className='flex justify-center items-center font-bold text-gray-700'>© 2022. All rights reserved by Palash Akand</small>
            </div>
        </footer>
    );
};

export default Footer;