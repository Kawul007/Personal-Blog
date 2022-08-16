import styled from 'styled-components';

export const Wrapper = styled.div`
height: 360px;
width: 90%;
display: flex;
margin-top: 25px;
`;


export const CarouselContainer = styled.div`
height: 360px;
width: 100%;
.ant-carousel{
    height: 360px;
    width: 55%;
    display: inline-block;
    margin-left: 3.95%;
  }
`;

export const ContentContainer = styled.div`
height: 360px;
width: 30%;
margin-left: 10%;
background-color: white;
display: inline-block;
overflow: hidden;
/* border-radius: 25% 10%; */
.title{
  font-size: 20px;
  color:black;
  height: 50px;
  background-color:white;
  text-align: center;
  line-height: 50px;
  border-bottom:thick dotted #ff0000;
}
`;
export const IntroductionWrapper = styled.div`
overflow: hidden;
font-size: 16px;
text-indent: 2rem;
`; 

export const AnnouncementContainer = styled.div`
  height: 360px;
  width: 100%;
  color: #fff;
  text-align: center;
  background-color: #364d79;
`;
