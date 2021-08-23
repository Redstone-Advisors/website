import React from 'react'
import styled from "styled-components";
import background from '../../assets/twopaths.jpg'
const Wrapper = styled.section`
  min-height:100vh;
  width:100%;
  overflow-x:hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const Video = styled.img`
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: -1;
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
line-height: 5rem;
font-size: 3rem;
width: max-content;
margin: 10rem auto 5rem auto;
${({ theme }) =>`@media (max-width: ${theme.screens.laptop}) {
 width:auto;
   padding:1rem;
  text-align:center;
  font-size:2.65rem;
  }`}
  ${({ theme }) =>`@media (max-width: ${theme.screens.mobile}) {
  font-size:1.5rem;
  line-height:3rem;
  margin-bottom:0rem;
  }`}
`
const Teaser = styled.div`
color: #fff;
padding: 1rem;
h2{
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
    ${({ theme }) =>`@media (max-width: ${theme.screens.mobile}) {
  font-size:1rem;
  }`}
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
    ${({ theme }) =>`@media (max-width: ${theme.screens.mobile}) {
  font-size:1rem;
  }`}
}
`
const Container = styled.div`
z-index:0;
width: max-content;
margin: 0 auto;
padding:1rem 1rem 5rem 1rem;
${({ theme }) =>`@media (max-width: ${theme.screens.mobile}) {
 padding-bottom:0;
  }`}

`
const Home = () => {
    return (
        <Wrapper>
            <Overlay/>
      <VideoWrapper>
        <Video id="videoBg" src={background}/>
      </VideoWrapper>
            <Container>
            <Headline>You created the wealth to retire<br></br>Now, which path will you take?</Headline>
            <Teaser><h2>May We Reccomend The Road Less Traveled</h2>
                <div><span>Wealth Preservation</span><span>Income Optimizaton</span><span>Investment Specialization</span></div>
            </Teaser>
            </Container>
        </Wrapper>
    )
}

export default Home
