import styled from "styled-components";
import product from "../images/image-product-1.jpg";
import productSmallImg1 from "../images/image-product-1-thumbnail.jpg";
import productSmallImg2 from "../images/image-product-2-thumbnail.jpg";
import productSmallImg3 from "../images/image-product-3-thumbnail.jpg";
import productSmallImg4 from "../images/image-product-4-thumbnail.jpg";

export default function ImageSection() {
  return (
    <ImgSection>
      <Product src={product} alt="" />
      <ProductImagesBox>
        <ProductSmallImg src={productSmallImg1} />
        <ProductSmallImg src={productSmallImg2} />
        <ProductSmallImg src={productSmallImg3} />
        <ProductSmallImg src={productSmallImg4} />
      </ProductImagesBox>
    </ImgSection>
  );
}
const ImgSection = styled.section`
  width: 445px;
  height: 565px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Product = styled.img`
  width: 100%;
  height: 445px;
  border-radius: 15px;
`;
const ProductImagesBox = styled.div`
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: space-between;
`;
const ProductSmallImg = styled.img`
  width: 88px;
  height: 88px;
  border-radius: 10px;
`;
