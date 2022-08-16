import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: aqua;
  margin-top: 140px;
  margin-left: 80px;
  /* display: flex; */
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 200px;
  background-color: aliceblue;
  z-index: 1;
`;

export const InfoWrapper = styled.div`
/* position: absolute; */
  width: 300px;
  height: 350px;
  background-color: beige;
  margin-left: 30px;
  margin-top: -30px;
  z-index: 200;

  &:hover{
    transform: translateX(-20px);
    box-shadow: 10px 10px 5px #888888;
  }
`;

export const InfoTitle = styled.div`
  position: relative;
  width: 150px;
  height: 40px;
  margin-top: -100px;
  margin-left: 20px;
  background-color: blueviolet;
  z-index: 999;
  .InfoWrapper:hover + .InfoTitle {
    transform: translateX(-20px);
  }
`;
