import styled from "styled-components";

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
`;
const NavList = styled.ul`
display: block;
width: max-content;
list-style:none;
display:flex;
padding:0;
margin:0;
li{
    font-size: 1.5rem;
    margin-right: 2rem;
    &:last-child{
        margin-right: 0;
    }
}
`


const Navbar = () => {
    return (
        <Nav> 
            <div>Redstone Advisors</div>
            <NavList>
                <li>Who We Are</li>
                <li>What We Do</li>
                <li>Why Redstone</li>
                <li>Blog</li>
                <li>FAQ</li>
            </NavList>
        </Nav>
    )
}

export default Navbar
