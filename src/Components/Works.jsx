import React, { useState } from "react";
import { styled } from "styled-components";
import { popUpReverse, popUpRight } from "../styles/animations";
import { WebDesign, Development, ProductDesign, OpenSource, Illustration } from "./index";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px white;
  user-select: none;

  &:hover {
    animation: ${popUpRight} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &:not(:hover) {
    animation: ${popUpReverse} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const data = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Open Source",
  ];
  const [works, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                className="element"
                key={item}
                onClick={() => setWork(item)}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {works === "Web Design" ? (
            <WebDesign />
          ) : works === "Development" ? (
            <Development />
          ) : works === "Open Source" ? (
            <OpenSource />
          ) : works === "Illustration" ? (
            <Illustration />
          ):(
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
