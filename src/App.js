import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { useState } from "react";
import ImageSection from "./components/ImageSection";
import "./App.css";

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
  const [isMainPicClicked, setIsMainPicClicked] = useState(false);

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
        setIsMainPicClicked={setIsMainPicClicked}
      />
      {isMainPicClicked && (
        <HiddenSection>
          <SliderSection>
            <svg
              width="14"
              height="15"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setIsMainPicClicked(false)}
            >
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
            <ImageSection isMainPicClicked={isMainPicClicked} />
          </SliderSection>
        </HiddenSection>
      )}
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
const HiddenSection = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SliderSection = styled.section`
  width: 550px;
  height: 742px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;
