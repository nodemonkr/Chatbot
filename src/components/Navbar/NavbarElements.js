import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

/* Header */
export const Nav = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  border-bottom: 1px solid #a4a9bc ;
  z-index: 10;
`;

/* Header (logo, Home, Chatbot, ...) */
export const NavLink = styled(Link)`
  color: #a4a9bc;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
  font-size: 1.2em;
  cursor: pointer;
  &.active {
    color: #242e41;
  }
`;

/* 모바일 시 목차 리스트를 보여주는 우측에 위치하는 바 */
export const Bars = styled(FaBars)`
  display: none;
  color: #425e7f;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

/* Header logo 제외 목차 (Home, Chatbot, ...) */
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;

export const NavBtn = styled.nav`
  display: flex;

  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
      display: none;
    }
`;

/* Login */
export const NavBtnLink = styled(Link)`
  color: #a4a9bc;
  border-radius : 5px;
  margin-left: 10px;

  position: relative;
  height: 35px;
  font-size: 0.8em;
  padding: 0.6em 1em;
  cursor: pointer;
  text-decoration : none;
  transition: 800ms ease all;
  outline: none;
  &.active{
    color : #242e41;
  }

`;