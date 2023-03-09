import Navigation from "./Navigation";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import styled from "styled-components";
import logo from "../images/logo.svg";
import { useState } from "react";

export default function Header() {
  const [isCartClicked, setIsCartClicked] = useState(false);
  return (
    <>
      <Head>
        <img src={logo} alt="" />
        <Navigation />
        <Cart
          onClick={() => setIsCartClicked(!isCartClicked)}
          src={cart}
          alt=""
        />
        <Avatar src={avatar} alt="" />
      </Head>
      <CartBox isCartClicked={isCartClicked}>
        <CartHeader>
          <Name>Cart</Name>
        </CartHeader>
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
const Cart = styled.img`
  cursor: pointer;
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
