import React from "react";
import "antd/dist/antd.min.css";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  HomeOutlined,
  RobotOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { FixedBarContainer, LogoWrapper, Wrapper } from "./FixedBar.styled";
import MenuItem from "antd/lib/menu/MenuItem";
// import { a } from "react-router-dom";
const FixedBar = () => (
  <Wrapper>
    <FixedBarContainer>
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <div className="logo">
          <a href="/">Kai4234</a>
        </div>
        <MenuItem key="menu01" icon={<RobotOutlined />}>
          <a href='/blogsDetails'/>精选博客
        </MenuItem>
        {/* <Menu.SubMenu key="SubMenu1" title="精选博客" icon={<RobotOutlined />}> */}
        {/* <Menu.Item key="two" icon={<AppstoreOutlined />}>
            浅聊日常
          </Menu.Item>
          <Menu.Item key="three" icon={<AppstoreOutlined />}>
            浅聊大学
          </Menu.Item>
          <Menu.Item key="four" icon={<AppstoreOutlined />}>
            浅聊工作
          </Menu.Item> */}
        {/* </Menu.SubMenu> */}
        <MenuItem key="menu02" icon={<AppstoreOutlined />}>
        <a href='/techDetails'/>技术便签
        </MenuItem>
        {/* <Menu.SubMenu
          key="SubMenu2"
          title="技术便签"
          icon={<SettingOutlined />}
        >
          <Menu.Item key="five" icon={<AppstoreOutlined />}>
            前端相关
          </Menu.Item>
          <Menu.Item key="six" icon={<AppstoreOutlined />}>
            后端相关
          </Menu.Item>
          <Menu.Item key="seven" icon={<AppstoreOutlined />}>
            Bug整理
          </Menu.Item>
        </Menu.SubMenu> */}
        <MenuItem key="menu03" icon={<AppstoreOutlined />}>
       <a href='/sayHi'/> 留言板
        </MenuItem>
        {/* <Menu.SubMenu key="SubMenu3" title="留言板" icon={<MailOutlined />}>
          <Menu.Item key="eight" icon={<AppstoreOutlined />}>
            填写留言
          </Menu.Item>
          <Menu.Item key="nine" icon={<AppstoreOutlined />}>
            3D互动
          </Menu.Item>
          <Menu.Item key="ten" icon={<AppstoreOutlined />}>
            待开发区域
          </Menu.Item>
        </Menu.SubMenu> */}
        <Menu.Item key="menu04" icon={<HomeOutlined />}>
         <a href='/search'/> 搜索中心
        </Menu.Item>
      </Menu>
    </FixedBarContainer>
    {/* <LogoWrapper>Kai4234</LogoWrapper> */}
  </Wrapper>
);

export default FixedBar;
