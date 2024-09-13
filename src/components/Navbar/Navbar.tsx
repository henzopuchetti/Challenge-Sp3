import React, { useState } from 'react';
import { Nav, NavbarLogo, NavbarMenuList, NavbarMenuItem, NavbarMenuLink, NavbarMenuButton } from './Navbar.style';
import logo from '../../assets/Captura_de_tela_2024-05-22_101428-removebg-preview.png';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Nav>
        <NavbarLogo src={logo} alt="logo" />
        <NavbarMenuButton onClick={toggleMenu}>
          <AiOutlineMenu size={40}/>
        </NavbarMenuButton>
        <NavbarMenuList className={isMenuOpen ? 'open' : ''}>
          <NavbarMenuItem>
            <NavbarMenuLink to="/">Home</NavbarMenuLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarMenuLink to="/login">Login</NavbarMenuLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarMenuLink to="/chatbot">Chatbot</NavbarMenuLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarMenuLink to="/chamados">Chamado</NavbarMenuLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavbarMenuLink to="/integrantes">Integrantes</NavbarMenuLink>
          </NavbarMenuItem>
        </NavbarMenuList>
      </Nav>
    </header>
  );
};

export default Navbar;
