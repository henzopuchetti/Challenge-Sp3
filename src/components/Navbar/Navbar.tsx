import React from 'react';
import { Nav, NavbarLogo, NavbarMenuList, NavbarMenuItem, NavbarMenuLink} from './Navbar.style';
import logo from '../../assets/Captura_de_tela_2024-05-22_101428-removebg-preview.png';


const Navbar: React.FC = () => {
  return (
    <header>
      <Nav>
        <NavbarLogo src={logo} alt="logo" />
        <NavbarMenuList>
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
