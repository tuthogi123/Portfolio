import React from 'react';
import styled from 'styled-components';
import SocialMediaLinks from './SocialMediaLinks';


  

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin: 0 10px;
  font-size: 1.5rem;
  color: #333;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007bff;
  }
`;

const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      {SocialMediaLinks.map((link, index) => (
        <SocialLink key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <i className={`fab ${link.icon}`} title={link.title}></i>
        </SocialLink>

      ))}
    </SocialMediaContainer>
  );
};

export default SocialMedia;
