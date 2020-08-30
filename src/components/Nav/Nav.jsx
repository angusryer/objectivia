import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { styles } from "../../styles/generalStyles";

export default function Nav() {
  return (
    <NavBar>
      <Title>objectivia</Title>
      <Links>
        <StyledLink to="/">
          <li>home</li>
        </StyledLink>
        <StyledLink to="/play">
          <li>play</li>
        </StyledLink>
        <StyledLink to="/about">
          <li>about</li>
        </StyledLink>
      </Links>
    </NavBar>
  );
}

const NavBar = styled.nav`
  position: sticky;
  height: 6.8rem;
  width: 18rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 2rem 1rem;
  background-color: transparentize(slategray, 0.9);
  border-bottom-right-radius: 20rem;
  border-bottom-left-radius: 20rem;
  background: linear-gradient(
      200deg,
      rgba(255, 255, 255, 1),
      rgba(150, 100, 100, 0.8) 70.71%
    ),
    linear-gradient(
      270deg,
      rgba(255, 255, 255, 1),
      rgba(50, 50, 50, 0.8) 70.71%
    ),
    linear-gradient(
      340deg,
      rgba(255, 255, 255, 1),
      rgba(150, 100, 100, 0.8) 70.71%
    );
  }
`;

const Title = styled.h2`
  letter-spacing: 5px;
  color: ${styles.primaryText};
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  transform: translateY(-4rem);
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  min-width: 2.5rem;
  max-height: 0.05rem;
  padding: 0.1rem 1rem;

  &:nth-child(2) {
    color: ${styles.primaryText};
    font-size: 1.2rem;
  }

  &:hover {
    background-color: transparentize(slategrey, 0.5);
    border-radius: 0.25rem;
  }
`;
