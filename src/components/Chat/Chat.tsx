import React from 'react';
import { ChatTexto, ChatInput, ChatBotao } from './Chat.style';

const Chat: React.FC = () => {
  return (
    <ChatTexto>
      <ChatInput type="text" placeholder="Insira sua mensagem aqui" />
      <ChatBotao>Enviar</ChatBotao>
    </ChatTexto>
  );
};

export default Chat;
