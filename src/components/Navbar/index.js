import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { AiOutlineTool } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavItem,
  NavLinks,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./Navbar.style";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">Kai4234</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                <BiHome />
                首页
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="technical"
               smooth={true}
               duration={500}
               spy={true}
               exact={true}
               offset={-80}
              >
                <BiNotepad />
                精选博客
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="blogs"
               smooth={true}
               duration={500}
               spy={true}
               exact={true}
               offset={-80}
              >
                <AiOutlineTool />
                技术便签
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="messages"
               smooth={true}
               duration={500}
               spy={true}
               exact={true}
               offset={-80}
              >
                <BiMessageAltDetail />
                留言板
              </NavLinks>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='singup'>Sing in</NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
