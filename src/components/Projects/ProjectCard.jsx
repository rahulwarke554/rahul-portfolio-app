import React, { useState } from "react";
import logodesigning from '../../assets/logo-designing.png'


const ProjectCard = ({ title, main }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
            <img src={logodesigning} alt="" className="p-4" />
            <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
                {title}
            </h3>
            <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
            <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
                <button
                    onClick={togglePopup}
                    className="px-4 py-2 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 focus:outline-none"
                >
                    Skills Used
                </button>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                            <h2 className="text-black text-lg font-bold mb-4">Technical Skills</h2>
                            <p className="text-gray-600 mb-6">
                                Java, Spring, NodeJs, React, Angular, Docker, Kubernates,
                                github, Jenkinss CI/CD, Azure, Aws S3, Paas, Mysql, Kafka, 
                                Azure EventHub, Redis, HazelCast, Confluence etc.
                            </p>
                            <div className="flex justify-end">
                                <button
                                    onClick={togglePopup}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default ProjectCard