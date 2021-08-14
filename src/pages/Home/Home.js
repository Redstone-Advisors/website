import React from 'react'
import styled from "styled-components";
import background from '../../assets/background.mp4'
const Wrapper = styled.section`
  min-height:100vh;
  width:100%;
  overflow:hidden;
  position: relative;
`;
const Video = styled.video`
display:block;
height:100vh;
`;
const Overlay = styled.div`
top:0;
left:0;
right:0;
bottom:0;
position:absolute;
background-color: rgba(0,0,0,0.5);

`;
const Headline = styled.h1`
color: #fff;
position: absolute;
line-height: 5rem;
font-size: 3rem;
top:40%;
left: 50%;
margin:0 auto;
width:max-content;
transform: translate(-50%, -50%);
${({ theme }) =>`@media (max-width: ${theme.screens.laptop}) {
 
   padding:1rem;
  
  }`}
`
const Teaser = styled.div`
color: #fff;
position: absolute;
bottom:0%;
left: 50%;
transform:translate(-50%, -30%);
h2{
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
}
div{
    display: flex;
    margin-top:1.5rem;
    padding: 1rem 0;
    border-top: 3px solid gold;
    border-bottom: 3px solid gold;
    ${({ theme }) =>`@media (max-width: ${theme.screens.laptop}) {
    flex-direction:column;
    align-items:center;
    gap:1rem;

}`}
}
span{
    font-size: 1.5rem;
    margin-right: 2rem;
    &:last-child{
        margin-right: 0;
    }
}
`
const Home = () => {
    return (
        <Wrapper>
            <Overlay/>
            <Video autoPlay loop muted id="videoBg">
                <source src={background} type='video/mp4' />
            </Video>
            <Headline>You created the wealth to retire<br></br>Now, which path will you take?</Headline>
            <Teaser><h2>May We Reccomend The Road Less Traveled</h2>
                <div><span>Wealth Preservation</span><span>Income Optimizaton</span><span>Investment Specialization</span></div>
            </Teaser>
        </Wrapper>
    )
}

export default Home
