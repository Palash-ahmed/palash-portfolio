import React from 'react';
import { BiPen } from 'react-icons/bi';
import about from'../../../assets/About.JPG';

const About = () => {

    const descriptions = [
        'Name: Md. Palash Akand',
        'Birthday: 28th December 1997',
        'Age: 24 Years',
        'City: Joypurhat, Rajshahi, Bangladesh',
        'Phone: +8801756284458',
        'Email: md.palash.akand@gmail.com',
        'Education: Bsc in Biochemistry'
    ]

    return (
        <div className='my-12' id='about'>
            <hr className='mt-16 mb-8 border-gray-300 shadow-2xl' />
            <p className='uppercase text-[#FF014F] text-xs my-3 monoster-fonts' >About Me</p>
            <h1 className='md:text-4xl text-2xl text-gray-600  font-semibold monoster-fonts'>Learn More About Me</h1>
            
            <div className='grid md:grid-cols-2 gap-7 mt-10 mb-5 items-center'>
                <div className='bg-purple-100 card-shadow rounded-lg lg:w-[450px] lg:h-[430px] lg:p-[14px] p-4 ' data-aos="fade-right" data-aos-duration="2000">

                    <img src={about} alt="" className=' rounded-lg lg:w-[430px] lg:h-[400px] ' />

                </div>
                <div  data-aos="fade-left" data-aos-duration="2000" className='lg:-ml-10'>
                    <h1 className='text-gray-600 text-2xl font-semibold'>Full Stack Web Developer</h1>
                    <p className='mt-3 md:hidden lg:block flex justify-center items-center text-gray-600 '>I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB,
                        JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development. </p>

                    <div className='mt-4'>
                        {
                            descriptions.map((description,index) => <p
                            key={index}
                            className='flex gap-3 my-2 lg:my-2.5 text-gray-700'>  <BiPen className='text-[#FF014F] text-xl' /> {description}  </p>)
                       }
                    </div>

                    
                    <button className='border-2 mt-2 border-[#FF014F] rounded-md text-gray-600  text-sm card-shadow hover:bg-[#FF014F] hover:text-white '> <a href="https://drive.google.com/file/d/1uCJCkurHTOvBYln60EfZBYMj9-OeJMHD/view?usp=sharing" download={true} className='py-2 px-3 block'>Download Resume</a> </button>

                </div>

            </div>
            
        </div>
    );
};

export default About;