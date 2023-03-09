import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style-type: none;
      text-decoration: none;
  }
`;
function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <MainSection />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
`;
