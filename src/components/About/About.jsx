import React from 'react'
import AboutImg from '../../assets/AboutImg.png';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div  id="About" className="text-white md:flex overflow-hidden item:center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
        <div>
            <h2 className="text-2xl md:text-2xl font-bold"> About </h2>
            <div className="md:flex flex-wrap flex-col md:flex-row items-center">
                <img className="md:h-80" src={AboutImg} alt="About Img" />

                <ul>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96 ">
                        <h1 className="text-xl md:text-2xl font-semibold leading-normal">Frontend Developer</h1>
                        <p className="text-sm md:text-md leading-tight">
                            Frontend developer with 3 years of experience in modern web technologies,
                            including HTML, CSS, JavaScript, Angular, and React. Proficient in creating 
                            responsive, user-centric interfaces,ensuring cross-browser compatibility, 
                            and delivering optimized, scalable web applications with a focus on performance
                             and design.
                        </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96 ">
                        <h1 className="text-xl md:text-2xl font-semibold leading-normal">Backend Developer</h1>
                        <p className="text-sm md:text-md leading-tight">
                            Backend developer with 4+ years of experience in Java (8+ versions) and Node.js. Proficient in frameworks
                            like Spring, monolithic, and microservice architectures. Skilled in building robust, scalable applications,
                            optimizing backend performance, and ensuring seamless API integrations.
                        </p>
                        </span>
                    </div>
                    <div className="flex gap-3 py-4">
                        <IoArrowForward size={30} className="mt-1"/>
                        <span className="w-96 ">
                        <h1 className="text-xl md:text-2xl font-semibold leading-normal">Database Engineer</h1>
                        <p className="text-sm md:text-md leading-tight">
                            Database professional with 4+ years of experience in MySQL, PL/SQL, and MongoDB. Skilled in database 
                            design, optimization, and query development, ensuring efficient data management, reliability, and 
                            performance across diverse applications.
                        </p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About