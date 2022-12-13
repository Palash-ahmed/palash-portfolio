import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyProjects from '../MyProjects/MyProjects';
import Skill from '../Skill/Skill';

const Home = () => {

    return (
        <div className='mt-8 over overflow-hidden lg:overflow-visible'>
            <Banner></Banner>
            <hr className='my-16  border-gray-300 shadow-2xl'/>
            <MyProjects></MyProjects>
            <Skill></Skill>
            <About></About>
            <ContactMe></ContactMe>
            <hr className='mt-16 mb-8 border-gray-300 shadow-2xl' />
        </div>
    );
};

export default Home;