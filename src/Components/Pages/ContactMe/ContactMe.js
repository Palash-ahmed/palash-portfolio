import React from 'react';
import { FaEnvelope, FaUser } from "react-icons/fa";

const ContactMe = () => {

    const submitButton = (event) => {
        event.preventDefault();
        const form = event.target;

    };

    return (
        <div className="my-16" id='contact'>
            <hr className='mt-16 mb-8 border-gray-300 shadow-2xl' />
            <div className='my-10 w-3/5 mx-auto'>
                <h1 className=' md:text-4xl font-semibold text-gray-600 text-2xl '>Contact With Me</h1>
            </div>
            <div
                className=""
                data-aos="zoom-out-up"

            >
                <form onSubmit={submitButton} className="flex-shrink-0 w-3/5 mx-auto shadow-2xl bg-gray-400 rounded-lg p-4 md:p-16 py-10">
                <h1 className='text-3xl font-bold  text-white  text-center '>Contact</h1>
                    <div class="flex my-12 gap-2">
                        <span class="inline-flex items-center  text-sm bg-gray-500 border border-r-0  rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
                            <FaUser></FaUser>
                        </span>
                        <input
                            type="text"
                            name="name"
                            id="website-admin"
                            required
                            class="rounded-none monoster-fonts rounded-r-lg focus:ring-0 focus:border-hidden text-white  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-500 border-0 placeholder-gray-300"
                            placeholder="Username"
                        />
                    </div>

                    <div class="flex my-12 gap-2">
                        <span class="inline-flex items-center  text-sm bg-gray-500 border border-r-0  rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
                            @
                        </span>
                        <input
                            name="email"
                            type="email"
                            required
                            id="website-admin"
                            class="rounded-none rounded-r-lg monoster-fonts focus:ring-0 focus:border-hidden  text-white  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-500 border-0 placeholder-gray-300"
                            placeholder="Email"
                        />
                    </div>

                    <div class="flex gap-2">
                        <span class="inline-flex items-center  text-sm bg-gray-500 border border-r-0  rounded-l-md text-gray-200 dark:border-gray-600 py-4 px-4">
                            <FaEnvelope></FaEnvelope>
                        </span>

                        <textarea
                            name="message"
                            required
                            className="textarea monoster-fonts focus:ring-0 focus:border-hidden  rounded-none rounded-r-lg  text-white  block flex-1 min-w-0 w-full text-sm  p-2.5  bg-gray-500 placeholder-gray-300"
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <div className=" mt-12 text-center md:text-start">
                        <input
                            type="submit"
                            className="btn bg-gray-600 text-white opacity-60 px-10 border-0 rounded-lg font-semibold p-2"

                            value="Send Message"
                        />
                    </div>
                </form>

            </div>

        </div>
    );
};

export default ContactMe;