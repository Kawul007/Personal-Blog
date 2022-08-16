import React, { useState, useEffect } from "react";
import {
  ActiveContent,
  CardContent,
  CardDetails,
  CardDetailsContent,
  ContentContainer,
  ContentWrapper,
  CradImg,
} from "./BlogContent.style";
import { CgCalendarDates } from "react-icons/cg";
import { AiFillTags } from "react-icons/ai";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";
const BlogContent = () => {
  const [scrollIcon, setScrollIcon] = useState(false);
  const showIcon = () => {
    if (window.scrollY >= 180) {
      setScrollIcon(true);
    } else {
      setScrollIcon(false);
    }
  };
  const toggleTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", showIcon);
  });
  return (
    <ContentContainer scrollIcon={scrollIcon}>
      <div><Link to='/' onClick={toggleTop}><BsFillArrowUpCircleFill style={{height:40,width:40}}/></Link></div>
      <ContentWrapper>
        <ActiveContent></ActiveContent>
        <CardContent>
          <CradImg>
            <img src="../../images/img-6.jpg"></img>
          </CradImg>
          <CardDetails>
            <div className="title">技术实现总结</div>
            <div className="time">
              &nbsp;&nbsp;
              <span>
                <CgCalendarDates />
                2022-7-19 16：30
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <MdOutlineCollectionsBookmark />
                项目介绍
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <AiFillTags />
                react
              </span>
              &nbsp;&nbsp;
            </div>
            <CardDetailsContent>
              1.前端主要是基于React和antd 来搭建，其中包括react-scroll、react-router以及常用的react函数、api等；
              2.后端主要是基于React admin的基础上通过node.js来进行对MongoDB等数据库操作；
              3.部署通过阿里云服务器部署不知道编不下去了。。。
            </CardDetailsContent>
          </CardDetails>
        </CardContent>
        <CardContent>
          <CardDetails>
          <div className="title">技术实现总结</div>
            <div className="time">
              &nbsp;&nbsp;
              <span>
                <CgCalendarDates />
                2022-7-19 16：30
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <MdOutlineCollectionsBookmark />
                项目介绍
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <AiFillTags />
                react
              </span>
              &nbsp;&nbsp;
            </div>
            <CardDetailsContent>
              1.前端主要是基于React和antd 来搭建，其中包括react-scroll、react-router以及常用的react函数、api等；
              2.后端主要是基于React admin的基础上通过node.js来进行对MongoDB等数据库操作；
              3.部署通过阿里云服务器部署不知道编不下去了。。。
            </CardDetailsContent>
          </CardDetails>
          <CradImg>
            <img src="../../images/img-8.jpg"></img>
          </CradImg>
        </CardContent>
        <CardContent>
          <CradImg>
            <img src="../../images/img-10.jpg"></img>
          </CradImg>
          <CardDetails>
          <div className="title">技术实现总结</div>
            <div className="time">
              &nbsp;&nbsp;
              <span>
                <CgCalendarDates />
                2022-7-19 16：30
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <MdOutlineCollectionsBookmark />
                项目介绍
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <AiFillTags />
                react
              </span>
              &nbsp;&nbsp;
            </div>
            <CardDetailsContent>
              1.前端主要是基于React和antd 来搭建，其中包括react-scroll、react-router以及常用的react函数、api等；
              2.后端主要是基于React admin的基础上通过node.js来进行对MongoDB等数据库操作；
              3.部署通过阿里云服务器部署不知道编不下去了。。。
            </CardDetailsContent>
          </CardDetails>
        </CardContent>
        <CardContent>
          <CardDetails>
          <div className="title">技术实现总结</div>
            <div className="time">
              &nbsp;&nbsp;
              <span>
                <CgCalendarDates />
                2022-7-19 16：30
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <MdOutlineCollectionsBookmark />
                项目介绍
              </span>
              &nbsp;&nbsp;<div className="blocker"></div>
              &nbsp;&nbsp;
              <span>
                <AiFillTags />
                react
              </span>
              &nbsp;&nbsp;
            </div>
            <CardDetailsContent>
              1.前端主要是基于React和antd 来搭建，其中包括react-scroll、react-router以及常用的react函数、api等；
              2.后端主要是基于React admin的基础上通过node.js来进行对MongoDB等数据库操作；
              3.部署通过阿里云服务器部署不知道编不下去了。。。
            </CardDetailsContent>
          </CardDetails>
          <CradImg>
            <img src="../../images/img-1.jpg"></img>
          </CradImg>
        </CardContent>
      </ContentWrapper>
    </ContentContainer>
  );
};

export default BlogContent;
