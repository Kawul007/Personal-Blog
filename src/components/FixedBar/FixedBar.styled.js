import styled from 'styled-components';

export const Wrapper  = styled.div`
width:100%;
height: 80px;
background-color: black;

`;

export const FixedBarContainer = styled.div`
width: 100%;
height:80px;
/* font-size: 20px; */
position: sticky;
background-color: white;
margin-left: auto;
overflow: hidden;
margin-right: auto;


.ant-menu{
    height:80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.4rem;
    text-align: center;
    background-color: #000;
    text-decoration: none;
    color: white;
    

}
.ant-menu-horizentail{
    margin-top: 258px;
    &:before{
       color: white;
    }
    &:after{
        border-bottom: none;
    }
}
.ant-menu-submenu-selected{
    box-sizing: content-box;
    /* text-decoration: none; */
}
.logo{
    width: 400px;
    /* margin-right: -1000px; */
    height: 50px;
    /* background-color: aqua; */
    /* display: inline-block; */
    /* align-items: left;
    justify-content: left; */
    color: white;
    font-size: 24px;
    line-height: 50px;
    /* a{
        text-decoration: none;
        color: white;
        &:hover{
            color: #1890ff;
        }
    } */
}
`;