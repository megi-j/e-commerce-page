import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import { useState } from "react";
import close from "./images/icon-close.svg";
import ImageSection from "./components/ImageSection";

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
          <PrevButton></PrevButton>
          <SliderSection>
            <CloseImg
              onClick={() => setIsMainPicClicked(false)}
              src={close}
              alt=""
            />
            <ImageSection />
          </SliderSection>
          <NextButton></NextButton>
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
  // justify-content: space-between;
  align-items: flex-end;
  border: 1px solid red;
`;
const CloseImg = styled.img`
  cursor: pointer;
  float: right;
  margin-bottom: 24px;
`;
const PrevButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
const NextButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
`;
