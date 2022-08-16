import React from "react";
import {
  SectionContaioner,
  SectionWrapper,
  SectionIcon,
  CardContainer,
  ImgWrapper,
  InfoTitle,
  InfoWrapper,
  HideWrapper,
  InfoDetails,
  MoreInfo,
  MoreIcon,
  SectionTitle,
  JumpIcon,
} from "./DetailsSection.style";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const DetailsSection = () => {
  return (
    <SectionContaioner id="technical">
      {/* <SectionTitle>
        <h1>
          精选博客
        </h1>
      </SectionTitle> */}

      <SectionWrapper>
        <CardContainer>
          <ImgWrapper>
            <img
              src="../../images/code.jpg"
              style={{ width: 300, height: 200 }}
            />
          </ImgWrapper>
          <HideWrapper>
            <InfoTitle>
              <span>2022/07/12</span>
            </InfoTitle>
            <InfoWrapper>
              <InfoDetails>
                我的第一篇博客，那就从我大学毕业那些天开始写吧。大学给我带来的变化以及在大学城整体的一个个人成长的过程的小事情。
              </InfoDetails>
              <Link to="/blogsDetails" style={{ textDecoration: "none" }}>
                <MoreInfo>
                  查看详情
                  <MoreIcon>
                    <AiOutlineRight
                      style={{
                        color: "red",
                        
                      }}
                    />
                  </MoreIcon>
                </MoreInfo>
              </Link>
            </InfoWrapper>
          </HideWrapper>
        </CardContainer>
        <CardContainer>
          <ImgWrapper>
            <img
              src="../../images/node.jpg"
              style={{ width: 300, height: 200 }}
            />
          </ImgWrapper>
          <HideWrapper>
            <InfoTitle>
              <span>2022/07/12</span>
            </InfoTitle>
            <InfoWrapper>
              <InfoDetails>
                这是一篇自我介绍用的博客。包含个人经历、感受和成长等方面做一个简单的了解。你感兴趣的继续看吧。哈哈哈
              </InfoDetails>
              <Link to="/blogsDetails" style={{ textDecoration: "none" }}>
                <MoreInfo>
                  查看详情
                  <MoreIcon>
                    <AiOutlineRight
                      style={{
                        color: "red",
                      }}
                    />
                  </MoreIcon>
                </MoreInfo>
              </Link>
            </InfoWrapper>
          </HideWrapper>
        </CardContainer>
        <CardContainer>
          <ImgWrapper>
            <img
              src="../../images/book.jpg"
              style={{ width: 300, height: 200 }}
            />
          </ImgWrapper>
          <HideWrapper>
            <InfoTitle>
              <span>2022/07/12</span>
            </InfoTitle>
            <InfoWrapper>
              <InfoDetails>
                今天是2022年7月12日，20：53，刚开始写几天，进度不是很好。还是得多看看基础的东西不然还有点难的。Step
                By Step You Can Do it.
              </InfoDetails>
              <Link to="/blogsDetails" style={{ textDecoration: "none" }}>
                <MoreInfo>
                  查看详情
                  <MoreIcon>
                    <AiOutlineRight
                      style={{
                        color: "red",
                      }}
                    />
                  </MoreIcon>
                </MoreInfo>
              </Link>
            </InfoWrapper>
          </HideWrapper>
        </CardContainer>
      </SectionWrapper>
      <JumpIcon>
        <Link to="/blogs" style={{ textDecoration: "none" }}>
          查看更多 <AiOutlineDoubleRight />{" "}
        </Link>
      </JumpIcon>
    </SectionContaioner>
  );
};

export default DetailsSection;
