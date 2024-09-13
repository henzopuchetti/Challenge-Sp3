import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavChatbotA = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid lightgray;
  background-color: white;
`;

export const NavChatbotPerfil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    padding-left: 10px;
    font-family: "Hind Siliguri", sans-serif;
    font-weight: 600;
    font-size: 25px;
  }
`;

export const NavChatbotBotao = styled(Link)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;
