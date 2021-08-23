import styled from "styled-components";
import {MenuOutlined} from '@ant-design/icons'
import{ useState } from 'react';
import { Drawer } from 'antd'
import {Link, NavLink} from 'react-router-dom'

const Nav = styled.nav`
  font-size: 32px;
  color: white;
  padding:1rem;
  margin:0;
  display:block;
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:99;
  display:flex;
  justify-content: space-between;
  align-items: center;
  div{
      font-weight: 300;
      ${({ theme }) =>`@media (max-width: ${theme.screens.mobile}) {
  font-size:1.5rem;
  }`}
  }
`;  
const NavList = styled.ul`
 ${({ theme }) =>`@media (max-width: ${theme.screens.laptop}) {
    display:none;
  }`}
display: block;
width: max-content;
list-style:none;
display:flex;
padding:0;
margin:0;
li{
    font-size: 1.25rem;
    font-weight: 600;
    margin-right: 2rem;
    a{
      color: inherit;
      text-decoration:none;
    
    }
    &:last-child{
        margin-right: 0;
    }
}
`
const NavButton = styled(MenuOutlined)`
 ${({ theme }) =>`@media (min-width: ${theme.screens.laptop}) {
    display:none;
  }`}
`
const MobileNavList= styled.ul`
margin: 0;
padding: 0;
list-style: none;
font-size:1.5rem;
font-weight: 600;
li{
    padding: 1rem;
    a{
      color: inherit;
      text-decoration:none;
    }
}
`



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
            <div>Redstone Advisors</div>
            <NavList>
                <li><Link to='/who'>Who We Are</Link></li>
                <li><Link to='/what'>What We Do</Link></li>
                <li><Link to='/why'>Why Redstone</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </NavList>
            <NavButton onClick={showDrawer}/>
            <Drawer
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
            <MobileNavList style={{color:'#424242'}}>
            <li><Link to='/who'>Who We Are</Link></li>
                <li><Link to='/what'>What We Do</Link></li>
                <li><Link to='/why'>Why Redstone</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
            </MobileNavList>
      </Drawer>
        </Nav>
    )
}

export default Navbar
