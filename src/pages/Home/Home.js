import React from 'react'
import styled from "styled-components";
import background from '../../assets/background.mp4'
const Wrapper = styled.section`
  min-height:100vh
  width:100%;
  overflow:hidden;
`;
const Video = styled.video`
display:block;
height:100vh;
`;
const Home = () => {
    return (
        <Wrapper>
       <Video autoPlay loop muted id="videoBg">
           <source src={background} type='video/mp4'/>
       </Video>

        </Wrapper>
    )
}

export default Home
