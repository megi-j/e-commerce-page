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
import prev from "../images/icon-previous.svg";
import next from "../images/icon-next.svg";

export default function ImageSection(props) {
  const [mainProduct, setMainProduct] = useState(productBigImg1);
  const [cklickedPic, setClickedPic] = useState(productSmallImg1);
  const [counter, setCounter] = useState(0);

  let productSmallImages = [
    [productSmallImg1, productBigImg1],
    [productSmallImg2, productBigImg2],
    [productSmallImg3, productBigImg3],
    [productSmallImg4, productBigImg4],
  ];

  function handleNextClick() {
    setCounter(counter + 1);
    setMainProduct(productSmallImages[counter][1]);
    if (counter >= productSmallImages.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    console.log("next " + counter);
  }
  console.log(counter);
  function handlePrevClick() {
    setCounter(counter - 1);
    setMainProduct(productSmallImages[counter][1]);
    if (counter <= 0) {
      setCounter(productSmallImages.length - 1);
    } else {
      setCounter(counter - 1);
    }
    console.log("prev " + counter);
  }
  return (
    <ImgSection isMainPicClicked={props.isMainPicClicked}>
      <PrevButton
        isMainPicClicked={props.isMainPicClicked}
        onClick={handlePrevClick}
      >
        <img src={prev} alt="" />
      </PrevButton>
      <Product
        onClick={() => props.setIsMainPicClicked(true)}
        src={mainProduct}
        alt=""
      />

      <ProductImagesBox>
        {productSmallImages.map((item, index) => {
          return (
            <ProductImageBox
              key={index}
              onClick={() => {
                setMainProduct(item[1]);
                setClickedPic(item[0]);
              }}
            >
              <ProductSmallImg src={item[0]} />
              <ProductImageBoxHidden
                id={cklickedPic === item[0] ? "active" : ""}
              />
            </ProductImageBox>
          );
        })}
      </ProductImagesBox>
      <NextButton
        isMainPicClicked={props.isMainPicClicked}
        onClick={handleNextClick}
      >
        <img src={next} alt="" />
      </NextButton>
    </ImgSection>
  );
}
const ImgSection = styled.section`
  width: 445px;
  height: 565px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;
const Product = styled.img`
  width: 100%;
  height: 445px;
  border-radius: 15px;
  cursor: pointer;
`;
const ProductImagesBox = styled.div`
  width: 100%;
  margin: 0 auto;
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
  border-radius: 10px;
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
const PrevButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.isMainPicClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: -29px;
`;
const NextButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.isMainPicClicked ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  right: -29px;
  border: none;
`;
