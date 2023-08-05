import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  margin-bottom: 40px;
  background-color: #f5f5f5; /* Light gray background color */
  padding: 20px;
`;

const SkillTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;
const skillsData = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', explanation: 'A widely used scripting language for web development.' },
      { name: 'HTML', explanation: 'The standard markup language for creating web pages.' },
      { name: 'CSS', explanation: 'Used for styling the presentation of web pages.' },
      { name: 'REACT', explanation: 'javascript library for building Ui' },
    ],
  },
  {
    title: 'Front-End Development',
    skills: [
      { name: 'React', explanation: 'A popular JavaScript library for building user interfaces.' },
      { name: 'Vue.js', explanation: 'A progressive framework for building interactive web interfaces.' },
      { name: 'Responsive Design', explanation: 'Creating web layouts that adapt to different screen sizes.' },
      { name: 'CSS Frameworks', explanation: 'Pre-designed CSS libraries for faster styling.' },
    ],
  },
  // Add more skill categories and skills as needed
];

const Skill = () => {
  return (
    <SkillContainer>
      {skillsData.map((skillGroup, index) => (
        <div key={index}>
          <SkillTitle>{skillGroup.title}</SkillTitle>
          <SkillList>
            {skillGroup.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>
                <strong>{skill.name}:</strong> {skill.explanation}
              </SkillItem>
            ))}
          </SkillList>
        </div>
      ))}
    </SkillContainer>
  );
};

export default Skill;
