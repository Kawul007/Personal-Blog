import styled from "styled-components";
import { SectionIcon } from "../ActiveSection/ActiveSection.style";

export const SectionContaioner = styled.div`
  background: whitesmoke;
  overflow: hidden;
  z-index: 1;
  height: 750px;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SectionWrapper = styled.div`
  display: inline-block;
  background-color:  whitesmoke;
  margin-top: 40px;
  margin-left: 10px;
  width: 100%;
  height: 750px;
`;

export const SectionTitle = styled.div`
  width: 200px;
  height: 50px;
  margin-top: 50px;
  display: inline-block;
  color: black;
  overflow: hidden;
  justify-items: center;
  text-align: center;
  position: relative;
  z-index: 300;
  margin-left: 200px;
`;

export const JumpIcon = styled.div`
  margin-top: 40px;
  margin-left: 1200px;
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-align: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  @media screen and (max-width:960px) {
         transition: 0.8s all ease ;
   } 
`;

export const CardContainer = styled.div`
  width: 300px;
  height: 450px;
  overflow: hidden;
  background-color: whitesmoke;
  margin-top: 40px;
  justify-content: center;
  margin-left: 120px;
  display: inline-block;
  
`;

export const ImgWrapper = styled.div`
  width: 300px;
  height: 200px;
  position: relative;
  background-color: aliceblue;
  z-index: 1;
`;

export const InfoWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  background-color: whitesmoke;
  margin-left: 30px;
  margin-top: -20px;
  z-index: 200;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  /* box-shadow: 0px 5px 56px rgba(34, 29, 31, 0.12); */
`;

export const HideWrapper = styled.a`
  display: block;
  position: relative;
  z-index: 600;
  background-color: rgba(255, 255, 255, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: none;
  &:hover {
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    transform: translateX(-10px);
    /* box-shadow: 10px 10px 5px #888888; */
  }
`;

export const InfoTitle = styled.div`
  position: relative;
  width: 150px;
  height: 40px;
  margin-top: -100px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  text-align: center;
  overflow: auto;
  background-color: #000;
  color: white;
  z-index: 999;
`;

export const InfoDetails = styled.div`
  width: 250px;
  height: 200px;
  margin-top: 20px;
  font-size: 20px;
  color: black;
  display: inline-block;
  background-color: white;
  box-shadow: 10px 10px 5px #888888;

`;
export const MoreInfo = styled.div`
  width: 250px;
  height: 50px;
  display: flex;
  overflow: hidden;
  /* margin: auto; */
  text-align: right;
  background-color: white;
  font-size: 20px;
  color: black;
  display: inline-block;
  overflow: hidden;
  box-shadow: 10px 10px 5px #888888;

  &:hover {
   color:#1c776b ;
   
  }
`;
export const MoreIcon = styled.div`
  width: 25px;
  height: 20px;
  margin-left: 5px;
  margin-top: 5px;
  align-items: center;
  display: inline-block;
  /* background-color: red; */
  justify-content: center;
`;
