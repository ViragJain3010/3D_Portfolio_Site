import React from "react";
import { styled } from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Logo = styled.img`
  height: 5rem;
`;

const List = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #da4ea2;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  width: 7rem;
  padding: 0.7rem;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #cd1e84;
  }
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/VJain_2.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <Button>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
