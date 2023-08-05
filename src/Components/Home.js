import React from 'react';
import styled, { keyframes } from 'styled-components';

const HomeContainer = styled.section`
  background-color: #e6f7ff; /* Light Blue Background Color */
  padding: 100px 0;
  text-align: center;
`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px); /* Adjust the distance of movement */
  }
  100% {
    transform: translateX(0);
  }
`;

const HomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  align-self: flex-end;
  animation: ${moveAnimation} 2s ease-in-out infinite; /* Adjust animation duration */
`;

const HomeSubtitle = styled.p`
  font-size: 1.5rem;
  color: black;
  align-self: flex-end;
`;

const Homelinks = styled.div`
  display: flex;
  justify-content: right;
  align-items: flex-end;
  color: black;
  margin-bottom: 32px;
  padding: 10px 20px;
`;

const HomeLinkItem = styled.a`
  text-decoration: none;
  margin: 0 5px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div className="container">
        <Homelinks>
          <HomeLinkItem href="/About">About</HomeLinkItem>
          <HomeLinkItem href="/contact">Contact</HomeLinkItem>
          <HomeLinkItem href="/projects">Projects</HomeLinkItem>
          <HomeLinkItem href="/Skills">Skills</HomeLinkItem>
          <HomeLinkItem href="/socialmedia">Social media</HomeLinkItem>
        </Homelinks>
        <HomeTitle>Welcome to My Portfolio</HomeTitle>
        <HomeSubtitle>Front-End Developer</HomeSubtitle>
        <p>Front-end developers create user interfaces and experiences for websites and apps. They use HTML for structure, CSS for styling, and JavaScript for interactivity. Skills include responsive design, frameworks like React, and optimizing performance. Effective collaboration, debugging, and design awareness are essential.</p>
      </div>
    </HomeContainer>
  );
};

export default Home;
