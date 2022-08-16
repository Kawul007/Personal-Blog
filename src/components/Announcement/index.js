import { Carousel } from "antd";
import React from "react";
import {
  AnnouncementContainer,
  CarouselContainer,
  ContentContainer,
  ImgContainer,
  IntroductionWrapper,
  Wrapper,
} from "./Announce.style";
import {GiExplodingPlanet,GiRingedPlanet,GiPlanetConquest} from "react-icons/gi"

const Announcement = () => (
  <Wrapper>
    <CarouselContainer>
      <ContentContainer>
        <div className="title">本站介绍</div>
        <IntroductionWrapper>
          <ol>
            <li>
              <GiExplodingPlanet style={{width:25,height:25,marginTop:5}}/>本站主要是用来记录个人生活日常、经历、技术学习和日常bug和处理方式等，希望自己能够经常反省，不要犯同一种错误，少走弯路警示自己UP!
            </li>
            <li>
              <GiRingedPlanet style={{width:30,height:30,marginTop:5}}/>欢迎各位visiters进入到我的个人博客，很是需要你宝贵的意见和反馈。本站也一直在开发当中，未来将会进一步完善和提升滴~~~
            </li>
            <li>
              <GiPlanetConquest style={{width:35,height:35,marginTop:5}}/>若想要留言<a href="/sayHi">点我</a>，若想要去查看网站资源 请持续关注我的Github，本项目后续的维护和完善内容也将会同步到那里
            </li>
          </ol>
        </IntroductionWrapper>
      </ContentContainer>
      <Carousel autoplay>
        <div>
          <AnnouncementContainer>
            <img
              src="../../images/space1.jpg"
              style={{ height: 360, width: "100%" }}
            ></img>
          </AnnouncementContainer>
        </div>
        <div>
          <AnnouncementContainer>
            <img
              src="../../images/space2.jpg"
              style={{ height: 360, width: "100%" }}
            ></img>
          </AnnouncementContainer>
        </div>
        <div>
          <AnnouncementContainer>
            <img
              src="../../images/space4.jpg"
              style={{ height: 360, width: "100%" }}
            ></img>
          </AnnouncementContainer>
        </div>
        <div>
          <AnnouncementContainer>
            <img
              src="../../images/space5.jpg"
              style={{ height: 360, width: "100%" }}
            ></img>
          </AnnouncementContainer>
        </div>
      </Carousel>
    </CarouselContainer>
  </Wrapper>
);

export default Announcement;
