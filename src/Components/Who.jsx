import React from "react";
import { styled } from "styled-components";
import { SqBox } from "../Components";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 72px;
  color: #e2e2e2;
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
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.button`
  background-color: #9004d0;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 16px;
  font-weight: 500;
  width: fit-content;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #cd03f5;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`;

const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <SqBox />
        </Left>
        <Right>
          <Title>Think Outside The Square Space </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Scholarly</Subtitle>
          </WhatWeDo>
          <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Desc>
          <Button>See More Works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
