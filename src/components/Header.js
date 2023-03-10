import Navigation from "./Navigation";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { useState } from "react";
import chosenImg from "../images/image-product-1-thumbnail.jpg";
import deleteIcon from "../images/icon-delete.svg";

export default function Header(props) {
  const [isCartClicked, setIsCartClicked] = useState(false);

  return (
    <>
      <Head>
        <img src={logo} alt="" />
        <Navigation />
        <CartDiv>
          <CartImg
            onClick={() => setIsCartClicked(!isCartClicked)}
            src={cart}
            alt=""
          />
          <CartNumber>{props.cartNumber}</CartNumber>
        </CartDiv>

        <Avatar src={avatar} alt="" />
      </Head>
      <CartBox isCartClicked={isCartClicked}>
        <CartHeader>
          <Name>Cart</Name>
        </CartHeader>
        <CartBody>
          {props.cartNumber == 0 ? (
            <CartText>Your cart is empty.</CartText>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CartInfoBox>
                <ChosenImg src={chosenImg} alt="" />
                <div>
                  <p>{props.productTitle}</p>
                  <span>{`$${props.productPrice} x ${props.cartNumber}`}</span>
                  &nbsp;&nbsp;
                  <span style={{ fontWeight: "bold" }}>{`$${
                    props.productPrice * props.cartNumber
                  }`}</span>
                </div>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => props.setCartNumber(0)}
                  src={deleteIcon}
                  alt=""
                />
              </CartInfoBox>
              <Checkout>Checkout</Checkout>
            </div>
          )}
        </CartBody>
      </CartBox>
    </>
  );
}
const Head = styled.header`
  width: 78%;
  height: 112px;
  margin: 0 auto;
  border-bottom: 1px solid #e4e9f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: 2px solid rgba(255, 126, 27, 0);
  &:hover {
    border: 2px solid rgba(255, 126, 27, 1);
    border-radius: 50%;
  }
`;
const CartDiv = styled.div`
  width: 21px;
  height: 20px;
  position: relative;
`;
const CartImg = styled.img`
  cursor: pointer;
`;
const CartNumber = styled.div`
  width: 19px;
  height: 13px;
  background: #ff7e1b;
  border-radius: 6.5px;
  position: absolute;
  top: -7px;
  right: -7px;
  font-weight: 700;
  font-size: 10px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartBox = styled.div`
  width: 360px;
  height: 256px;
  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;
  position: absolute;
  right: 89px;
  top: 94px;
  display: ${(props) => (props.isCartClicked ? "block" : "none")};
`;
const CartHeader = styled.header`
  width: 100%;
  height: 67px;
  border-bottom: 1px solid #e4e9f2;
  padding: 24px;
`;
const Name = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: #1d2026;
`;
const CartText = styled.h4`
  font-weight: 700;
  font-size: 16px;
  color: #69707d;
`;
const CartBody = styled.div`
  width: 100%;
  height: 73%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;
const CartInfoBox = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Checkout = styled.button`
  width: 100%;
  height: 56px;
  background: #ff7e1b;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
`;
const ChosenImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;
