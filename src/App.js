import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { useState } from "react";

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
  const [cartNumber, setCartNumber] = useState(0);
  const [productTitle, setProductTitle] = useState(
    "Fall Limited Edition Sneakers"
  );
  const [productPrice, setProductPrice] = useState("125.00");
  return (
    <Container>
      <GlobalStyles />
      <Header
        cartNumber={cartNumber}
        productTitle={productTitle}
        productPrice={productPrice}
        setCartNumber={setCartNumber}
      />
      <MainSection
        cartNumber={cartNumber}
        setCartNumber={setCartNumber}
        productTitle={productTitle}
        productPrice={productPrice}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;
