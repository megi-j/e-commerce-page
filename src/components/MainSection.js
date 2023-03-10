import styled from "styled-components";
import ImageSection from "./ImageSection";
import DescriptionSection from "./DescriptionSection";

export default function MainSection(props) {
  return (
    <Main>
      <ImageSection />
      <DescriptionSection
        cartNumber={props.cartNumber}
        setCartNumber={props.setCartNumber}
        productTitle={props.productTitle}
        productPrice={props.productPrice}
      />
    </Main>
  );
}

const Main = styled.main`
  width: 70%;
  margin: 90px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
