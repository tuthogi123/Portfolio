import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: violet;
  color: black;
  padding: 20px 0;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  
`;

const HeaderSubtitle = styled.p`
  font-size: 1.2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <HeaderTitle>Karani Evans</HeaderTitle>
        <HeaderSubtitle>Front-End Developer</HeaderSubtitle>
        {/* Add navigation links here */}
      </div>
    </HeaderContainer>
  );
};

export default Header;
