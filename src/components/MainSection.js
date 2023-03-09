import styled from "styled-components";
import ImageSection from "./ImageSection";
import DescriptionSection from "./DescriptionSection";

export default function MainSection() {
  return (
    <Main>
      <ImageSection />
      <DescriptionSection />
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
