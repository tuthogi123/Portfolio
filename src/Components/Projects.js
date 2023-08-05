import React from 'react';
import styled from 'styled-components';
import { projectsData } from './Data'; // Import your projectsData

const ProjectsContainer = styled.section`
  padding: 50px 0;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ProjectCard = styled.div`
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <div className="container">
        <ProjectsTitle>Projects</ProjectsTitle>
        {projectsData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <img src={project.imageUrl} alt={project.title} />
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </ProjectCard>
        ))}
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
