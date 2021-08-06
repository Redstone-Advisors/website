import styled from "styled-components";

const Nav = styled.nav`
  font-size: 32px;
  color: white;
  padding:0;
  margin:0
  display:block;
  position:fixed;
  top:0;
  padding:1rem;
`;

const Navbar = () => {
    return (
        <Nav> 
            <h1>Redstone Advisors</h1>
        </Nav>
    )
}

export default Navbar
