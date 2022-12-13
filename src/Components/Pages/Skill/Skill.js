import React from 'react';
import { Line } from "rc-progress";
import './Skill.css';

const Skill = () => {

  return (
    <div data-aos="fade-up-right" className="p-4" id='skills'>
      <hr className='mt-16 mb-8 border-gray-300 shadow-2xl' />
      <h1 className='md:text-4xl text-2xl text-gray-600 monoster-fonts font-semibold  '>Skills</h1>

      <div>
        <div className="flex justify-between my-3">
          <p>HTML</p>
          <p>85%</p>
        </div>
        <Line percent={85} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>CSS</p>
          <p>80%</p>
        </div>
        <Line percent={80} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>BOOTSTRAP</p>
          <p>70%</p>
        </div>
        <Line percent={70} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>TAILWIND</p>
          <p>80%</p>
        </div>
        <Line percent={80} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>JAVASCRIPT</p>
          <p>70%</p>
        </div>
        <Line percent={70} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>REACT JS</p>
          <p>75%</p>
        </div>
        <Line percent={75} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>EXPRESS JS</p>
          <p>60%</p>
        </div>
        <Line percent={60} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>NODE JS</p>
          <p>70%</p>
        </div>
        <Line percent={70} strokeWidth={2} strokeColor="#ee1556" />
        <div className="flex justify-between my-3">
          <p>MONGODB</p>
          <p>65%</p>
        </div>
        <Line percent={65} strokeWidth={2} strokeColor="#ee1556" />
      </div>
    </div>
  );
};

export default Skill;