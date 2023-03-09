import styled from "styled-components";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

export default function DescriptionSection() {
  return (
    <DescriptionBox>
      <CompanyName>Sneaker Company</CompanyName>
      <ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
      <ProductDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </ProductDescription>
      <div style={{ display: "flex" }}>
        <NewPrice>$125.00</NewPrice>
        <DiscountPercent>50%</DiscountPercent>
      </div>
      <OldPrice>$250.00</OldPrice>
      <div style={{ display: "flex" }}>
        <QuantityBox>
          <img src={minus} alt="" />
          <p>0</p>
          <img src={plus} alt="" />
        </QuantityBox>
        <CartBox>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fill-rule="nonzero"
            />
          </svg>
          <p>Add to cart</p>
        </CartBox>
      </div>
    </DescriptionBox>
  );
}

const DescriptionBox = styled.section`
  width: 445px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const CompanyName = styled.h6`
  font-weight: 700;
  font-size: 13px;
  color: #ff7e1b;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const ProductTitle = styled.h2`
  color: #1d2026;
  font-weight: 700;
  font-size: 44px;
`;
const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #69707d;
`;
const NewPrice = styled.p`
  font-weight: 700;
  font-size: 28px;
  color: #1d2026;
`;
const DiscountPercent = styled.div`
  width: 51px;
  height: 27px;
  color: #ff7e1b;
  font-weight: 700;
  font-size: 16px;
  background: #ffeee2;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OldPrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #b6bcc8;
  text-decoration-line: line-through;
`;
const QuantityBox = styled.div`
  width: 157px;
  height: 56px;
  background: #f6f8fd;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const CartBox = styled.div`
  width: 272px;
  height: 56px;
  background: #ff7e1b;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
`;
