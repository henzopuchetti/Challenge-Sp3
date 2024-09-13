
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { NavChatbotA, NavChatbotPerfil, NavChatbotBotao } from './NavChatbot.style';
import img from '../../assets/Ellipse 1.png'

const NavChatbot: React.FC = () => {
  return (
    <NavChatbotA>
      <NavChatbotPerfil>
        <img src={img} />
        <p>Chatbot HH</p>
      </NavChatbotPerfil>
      <NavChatbotBotao to="/"> <AiOutlineClose size={40} /> </NavChatbotBotao>
    </NavChatbotA>
  );
};

export default NavChatbot;
