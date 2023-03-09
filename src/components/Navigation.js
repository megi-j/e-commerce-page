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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ul = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const List = styled.li`
  height: 100%;
  font-weight: 400;
  font-size: 15px;
  color: #69707d;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid rgba(255, 126, 27, 0);
  &:hover {
    color: #1d2026;
    border-bottom: 4px solid rgba(255, 126, 27, 1);
  }
`;
