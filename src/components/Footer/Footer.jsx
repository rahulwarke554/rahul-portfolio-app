import React from 'react'
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'


const Footer = () => {
  return (
    <div id="Footer" className="flex justify-around bg-[#465497] text-white p-10 md:p-12 items-center">
        <div>
            <h1 className="text-2xl md:text-6xl font-bold"> Contacts</h1>
            <h3 className="text-sm md:text-2xl font-normal">Feel free to reach out!</h3>
        </div>
        <ul className="text-sm md:text-xl">

            <li className="flex gap-1 items-center">
                <FaEnvelope size={20}/>
                rahulwarke554@gmail.com
            </li>
            <li className="flex gap-1 items-center">
                <FaLinkedin size={20}/>
                https://www.linkedin.com/in/rahul-warke-a6004014b/
            </li>
            <li className="flex gap-1 items-center">
                <FaGithub size={20}/>
                https://github.com/rahulwarke554
            </li>
            
        </ul>
    </div>
  )
}

export default Footer