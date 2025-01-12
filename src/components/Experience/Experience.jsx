import React from 'react'
import { FaAngular, FaAws, FaCss3, FaDocker, FaGit, FaGithub, FaHtml5, FaJava, FaJenkins, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiApachekafka, SiKubernetes, SiMongodb, SiMysql } from 'react-icons/si';
import Crisil from '../../assets/Crisil.png';
import Prettl from '../../assets/Prettl.jpeg';
import LexisNexis from '../../assets/LexisNexis.jpeg'

const Experience = () => {
    return (
        <div id="Experience" className="p-10 md:p-24 ">
            <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>
            <div className="flex flex-wrap items-center justify-around">
                <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaJava color="#61DAFB" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaHtml5 color="#E34F26" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaCss3 color="#1572b6" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaReact color="#61DAFB" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaJs color="#F7DF1E" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaNodeJs color="#3C873A" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaAngular color="#FF0000" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiMongodb color="#47A248" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiMysql color="#D08B2C" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaAws color="#124eDf" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaGithub color="#FFFFFF" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaDocker color="#87CEEB" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiKubernetes color="#326ce5" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <SiApachekafka color="#C2CF7C" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaGit color="#f1502f" size={50} />
                    </span>
                    <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
                        <FaJenkins color="#48728b" size={50} />
                    </span>
                </div>
                <div>
                    <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                        <img className="w-12 h-12" src={LexisNexis} alt="LexisNexis ltd" />
                        <span className="text-white">
                            <h2 className="leading-tight">Software Engineer II, LexisNexis</h2>
                            <p className="text-sm leading-tight font-thin">March 2024 - Present</p>
                            <ul className="text-sm p-2">
                                <li>- Work as Software Engineer II</li>
                                <li>- Integrating products into rules framework using ESP and JSON. </li>
                                <li>- Working with microservices, CI/CD pipelines, and Azure Cloud.</li>
                                <li>- Monitoring with Grafana, caching with Redis.</li>
                            </ul>
                        </span>
                    </div>
                    <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                        <img className="w-12 h-12" src={Crisil} alt="Crisil ltd" />
                        <span className="text-white">
                            <h2 className="leading-tight">Software Engineer, CRISIL</h2>
                            <p className="text-sm leading-tight font-thin">November 2021 - March 2024</p>
                            <ul className="text-sm p-2">
                                <li>- Work as Software Engineer</li>
                                <li>- Developed QuickDeck tool for custom PowerPoint generation.</li>
                                <li>- Integrated data from internal apps for chart generation.</li>
                                <li>- Built cloud-based Java Spring Boot microservices for data ingestion.</li>
                            </ul>
                        </span>
                    </div>
                    <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center">
                        <img className="w-12 h-12" src={Prettl} alt="Prettl ltd" />
                        <span className="text-white">
                            <h2 className="leading-tight">Development Engineer, PRETTL</h2>
                            <p className="text-sm leading-tight font-thin">June 2019 - May 2020</p>
                            <ul className="text-sm p-2">
                                <li>- Work as Development Engineer</li>
                                <li>- Developed Rent-a-Car system using MongoDB, Express, React.js, Node.js.</li>
                                <li>- Maintained wire harness color coding system in MongoDB.</li>
                                <li>- Used Redis for caching frequently fetched data, developed UI with React.</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience