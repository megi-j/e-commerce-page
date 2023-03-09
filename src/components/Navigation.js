import styled from "styled-components";

export default function Navigation() {
  return (
    <Nav>
      <Ul>
        <List>Collections</List>
        <List>Men</List>
        <List>Women</List>
        <List>About</List>
        <List>Contact</List>
      </Ul>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 400px;
`;
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.li`
  font-weight: 400;
  font-size: 15px;
  color: #69707d;
`;
