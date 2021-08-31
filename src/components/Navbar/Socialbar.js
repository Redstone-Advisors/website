import React from "react";
import styled from "styled-components";
import fb from "../../assets/iconmonstr-facebook-1.svg";
import tw from "../../assets/iconmonstr-twitter-1.svg";
import ln from "../../assets/iconmonstr-linkedin-1.svg";

const Container = styled.div`
  background: none;
  padding: 0;
  margin: 0;
`;
const Img = styled.img`
  padding: 0;
  margin: 0;
  width: 20px;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
`;
const Socialbar = () => {
  return (
    <Container>
      <Img src={fb} alt="" />
      <Img src={tw} alt="" />
      <Img src={ln} alt="" />
    </Container>
  );
};

export default Socialbar;
