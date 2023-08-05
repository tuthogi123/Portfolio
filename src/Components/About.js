import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.section`
  padding: 50px 0;
  background-color: #f5f5f5;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: black;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const SkillContainer = styled.div`
  margin-top: 20px;
`;

const Skill = styled.div`
  margin-bottom: 10px;
`;

const SkillTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const SkillProgress = styled.div`
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  position: relative;
`;

const SkillProgressBar = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background-color: #007bff;
  border-radius: 4px;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const About = () => {
  const skills = [
    { title: 'React', level: 90 },
    { title: 'HTML', level: 95 },
    { title: 'CSS', level: 85 },
    { title: 'JavaScript', level: 80 },
    // Add more skills
  ];

  return (
    <AboutContainer>
      <div className="container">
        <AboutTitle>About</AboutTitle>
        <AboutText>
          Hi there! I'm a passionate front-end developer with a strong interest in creating
          user-friendly and visually appealing websites. I have experience in React, HTML, CSS,
          and JavaScript, and I'm always eager to learn new technologies. When I'm not coding, you
          can find me exploring the outdoors or reading a good book.
          <br />
          <br />
          I am experienced in front-end development, having completed many projects based on front-end languages.
        </AboutText>
        <SkillContainer>
          <AboutTitle>Skills</AboutTitle>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillProgress>
                <SkillProgressBar progress={skill.level} />
              </SkillProgress>
            </Skill>
          ))}
        </SkillContainer>
        {/* Add a timeline or other engaging elements here */}
      </div>
    </AboutContainer>
  );
};

export default About;
