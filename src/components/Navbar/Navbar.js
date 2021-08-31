import styled from "styled-components";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Drawer } from "antd";
import { Link, NavLink } from "react-router-dom";
import Socialbar from "./Socialbar";

const Nav = styled.nav`
  font-size: 32px;
  color: white;
  padding: 0 1rem;
  margin: 0;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  flex-direction: column;

  div {
    font-weight: 300;
    ${({ theme }) => `@media (max-width: ${theme.screens.mobile}) {
  font-size:1.5rem;
  }`}
  }
`;
const NavList = styled.ul`
  ${({ theme }) => `@media (max-width: ${theme.screens.laptop}) {
    display:none;
  }`}
  width: max-content;
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  li {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 0;
    margin-right: 2rem;
    a {
      margin-top: 0;
      color: inherit;
      text-decoration: none;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`;
const NavButton = styled(MenuOutlined)`
  ${({ theme }) => `@media (min-width: ${theme.screens.laptop}) {
    display:none;
  }`}
`;
const MobileNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 1.5rem;
  font-weight: 600;
  li {
    padding: 1rem;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;
const Logo = styled.div`
  h1 {
    padding: 0;
    margin: 0;
    line-height: 5px;
  }
  span {
    font-size: 17px;
    padding: 0;
    margin: 0;
    font-weight: 500;
    font-family: "EB Garamond", serif;
  }
`;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Nav>
      <Top>
        <Socialbar />
      </Top>
      <Bottom>
        <Logo>
          <h1>Redstone Advisors</h1>
          <span>A Timeless Approach A Unique Perspective</span>
        </Logo>
        <NavList>
          <li>
            <Link to="/who">Who</Link>
          </li>
          <li>
            <Link to="/what">What</Link>
          </li>
          <li>
            <Link to="/why">Why</Link>
          </li>
          <li>
            <Link to="/philosophy">Philosophy</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </NavList>

        <NavButton onClick={showDrawer} />
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <MobileNavList style={{ color: "#424242" }}>
            <li>
              <Link to="/who">Who</Link>
            </li>
            <li>
              <Link to="/what">What</Link>
            </li>
            <li>
              <Link to="/why">Why</Link>
            </li>
            <li>
              <Link to="/philosophy">Philosophy</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </MobileNavList>
        </Drawer>
      </Bottom>
    </Nav>
  );
};

export default Navbar;
