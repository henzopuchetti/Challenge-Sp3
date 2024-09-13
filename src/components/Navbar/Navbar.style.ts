import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  
  @media (max-width: 550px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const NavbarLogo = styled.img`
  width: 100px;
`;

export const NavbarMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  
  @media (max-width: 550px) {
    display: block;
  }
`;

export const NavbarMenuList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media (max-width: 550px) {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px; /* ou ajuste conforme o header */
    left: 0;
    background-color: white;
  }

  &.open {
    display: flex;
  }
`;

export const NavbarMenuItem = styled.li`
  margin: 10px;
`;

export const NavbarMenuLink = styled(Link)`
  text-decoration: none;
  color: #02C2FF;
  display: block;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;
