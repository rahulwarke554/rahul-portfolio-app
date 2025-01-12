import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-6">
        <ProjectCard 
            title="Smartpath (Insuarence Risk)"
            main="In an insurance-based project with Lexis Nexis, the team leverages tools like Java, Kubernetes, Docker, microservices, CI/CD, and Azure to deliver solutions for US and UK clients. The project focuses on meeting client demands and ensuring seamless integration and deployment with the latest technologies in the industry."/>
        <ProjectCard 
            title="QuickDeck"
            main="QuickDeck is a web-based tool that allows users to generate customized PowerPoint presentations with just a few clicks, tailored to client requirements. It integrates data from an internal application to customize and create charts. The project uses technologies like Java, Spring Boot, Hibernate, JavaScript, MySQL, Angular, and Redis to enhance functionality and performance for CRISIL Ltd."/>
        <ProjectCard 
            title="Data Ingestion"
            main="This cloud-based microservices architecture uses Java and Spring Boot to build a data ingestion application. It collects and processes data from various cloud-based applications through an ETL process involving JSON data. The application is developed using technologies such as Java, Spring Boot, Hibernate, JavaScript, MySQL, Angular, and Redis for efficient data handling and processing."/>
        </div>
    </div>
  )
}

export default Projects