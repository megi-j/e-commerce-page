import Navigation from "./Navigation";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import styled from "styled-components";
import logo from "../images/logo.svg";
export default function Header() {
  return (
    <Head>
      <img src={logo} alt="" />
      <Navigation />
      <img src={cart} alt="" />
      <Avatar src={avatar} alt="" />
    </Head>
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
`;
