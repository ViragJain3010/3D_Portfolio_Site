import { Hero, Contact, Who, Works, Navbar } from "./Components";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

export default App;
