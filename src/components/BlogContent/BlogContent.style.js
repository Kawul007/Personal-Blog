import styled from "styled-components";

export const ContentContainer = styled.div`
/* position: relative;

.div{
  position: fixed;
  top: 100px;
  left: 50px;
} */
`;

export const ContentWrapper = styled.div``;

export const ActiveContent = styled.div`
  width: 90%;
  height: 50px;
  background-color: blue;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const CardContent = styled.a`
  position: relative;
  display: block;
  width: 90%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  /* background-color: black; */
  /* border-radius: 2rem; */
  overflow: hidden;
  z-index: 100;
  /* &:hover {
    img {
   
      background: #000;
      
    }
  } */
`;
export const ToTheTop = styled.div`
margin-top: 380px;
position: fixed;
/* display:flex; */
margin-right: ${({scrollIcon}) => (scrollIcon ? '-90%' : '-110%')};

`;

export const CradImg = styled.div`
  display: inline-block;
  width: 40%;
  height: 100%;
  background-color: white;
  overflow: hidden;
  /* background-size: contain; */
  img {
    background-size: contain;
    width: 100%;
    height: 300px;
  }
`;

export const CardDetails = styled.div`
  display: inline-block;
  width: 60%;
  height: 100%;
  background: white;
  overflow: hidden;

  .title {
    width: 180px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    /* margin-left: auto;
    margin-right: auto; */
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }
  .time {
    width: 380px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-left: auto;
    margin-right: auto; */
    font-size: 16px;
    color: #575757;
    .blocker {
      width: 2px;
      height: 18px;
      background-color: #b4b4b4;
    }
    /* .instruction {
      width: 200px;
      height: 50px;
      background-color: #174797;
      display: flex;
      align-items: center;
      justify-content: center;
    }*/
  }
`;

export const CardDetailsContent = styled.div`
  width: 700px;
  height: 200px;
  margin-left: 30px;
  /* background-color: #174797; */
  color: #000;
  font-size: 16px;
  text-indent: 2rem;
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;
