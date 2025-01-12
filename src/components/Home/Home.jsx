import React from 'react'
import avtarImg from '../../assets/remove-bg-img.png';
import TextChange from '../TextChange';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../download/Rahul_Warke_Full_Stack_Devoloper_4+_YOE.pdf"; 
    link.download = "/Rahul_Warke_Full_Stack_Devoloper_4+_YOE.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md;pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          A versatile Full Stack Developer with over 4 years of experience
          in creating efficient web solutions using Java, J2EE, Spring Boot, JPA, and Hibernate.
        </p>
        <button className="mt-10 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover: scale-105 font-semibold rounded-3xl bg-[#465697]"
        onClick={handleDownload}>Download Resume!</button>
        
      </div>
      <div><img className="md:h-80" src={avtarImg} alt="" /></div>
    </div>
  )
}

export default Home