import styled from "styled-components";
import productSmallImg1 from "../images/image-product-1-thumbnail.jpg";
import productSmallImg2 from "../images/image-product-2-thumbnail.jpg";
import productSmallImg3 from "../images/image-product-3-thumbnail.jpg";
import productSmallImg4 from "../images/image-product-4-thumbnail.jpg";
import productBigImg1 from "../images/image-product-1.jpg";
import productBigImg2 from "../images/image-product-2.jpg";
import productBigImg3 from "../images/image-product-3.jpg";
import productBigImg4 from "../images/image-product-4.jpg";
import { useState } from "react";

export default function ImageSection() {
  const [mainProduct, setMainProduct] = useState(productBigImg1);
  let productSmallImages = [
    [productSmallImg1, productBigImg1],
    [productSmallImg2, productBigImg2],
    [productSmallImg3, productBigImg3],
    [productSmallImg4, productBigImg4],
  ];
  return (
    <ImgSection>
      <Product src={mainProduct} alt="" />
      <ProductImagesBox>
        {productSmallImages.map((item) => {
          return (
            <ProductImageBox onClick={() => setMainProduct(item[1])}>
              <ProductSmallImg src={item[0]} />
              <ProductImageBoxHidden />
            </ProductImageBox>
          );
        })}
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
  width: 100%;
  border-radius: 10px;
`;
const ProductImageBox = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
`;
const ProductImageBoxHidden = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
  &:hover {
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    );
  }
`;
