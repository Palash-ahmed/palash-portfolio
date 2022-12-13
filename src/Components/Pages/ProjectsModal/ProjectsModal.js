import React from 'react';
import { FiAlignJustify, FiCommand } from "react-icons/fi";
import {  FaArrowRight } from 'react-icons/fa';
import { BiGitBranch } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

const ProjectsModal = ({project}) => {
    const { name, img, live_link, client_side , server_side, tools, description } = project

    return (
        <div  >
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative project-color   w-11/12 max-w-6xl ">
                    <label htmlFor="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 py-5 '>

                        <div className=' lg:h-96 h-64 items-center'>
                            <img className='rounded-lg' src={img} alt="" />
                        </div>
                        
                        <div className='text-gray-600 lg:relative'>

                            <h1 className='text-xl font-semibold  flex items-center gap-5'> <FiAlignJustify className='text-[#FF014F]' />{name}</h1>
                            <p className='mt-2 flex gap-5'> <FiCommand className='w-10 h-10 text-red-500' />Technology: {tools}</p>
                            <div className='mt-3'>
                                <p><span className='text-red-500 font-bold'>Description:</span> {description}</p>
                            </div>
                            <div className=' lg:flex justify-around lg:absolute lg:bottom-2 lg:gap-10 '>
                                <a href={live_link} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md  text-sm   flex gap-1 items-center lg:my-0 mb-4'> Live Site <FaArrowRight /> </a>
                                <a href={client_side} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md  text-sm   flex gap-1 items-center lg:my-0 mb-4'>GitHub client <AiFillGithub /> </a>
                                <a href={server_side} target="_blank" className='card-shadow monoster-fonts text-gray-500 hover:bg-[#FF014F] hover:text-white px-5 py-4 rounded-md  text-sm   flex gap-1 items-center lg:my-0 mb-4 text-center'> GitHub Server <BiGitBranch className='text-center' /> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProjectsModal;