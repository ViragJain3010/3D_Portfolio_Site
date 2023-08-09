import React from "react";
import { styled } from "styled-components";
import { Navbar, Sphere_3d } from "./index";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 92px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Line = styled.img`
  height: 5px;
  width: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 30px;
  color: #9004d0;
`;

const Desc = styled.p`
  color: lightgray;
`;

const Button = styled.button`
  background-color: #9004d0;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 18px;
  font-weight: bold;
  width: 80%;
  margin: 0 auto;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #cd03f5;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  object-fit: contain;
  width: 45%;
  height: 45%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease-in-out alternate;
  pointer-events: none;
  user-select: none;

  @keyframes animate {
    from {
      transform: translateY(-15px);
    }
    to {
      transform: translateY(15px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Think </Title>
          <Title> Code </Title>
          <Title> Create</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>DEVELOPER</Subtitle>
          </WhatWeDo>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            vitae, quod dolores deleniti corporis nulla!
          </Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Sphere_3d />
          <Img src="./img/astro.png" />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
