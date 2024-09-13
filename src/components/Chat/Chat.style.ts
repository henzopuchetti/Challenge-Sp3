import styled from 'styled-components';

export const ChatTexto = styled.div`
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-top: 1px solid lightgray;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #aaaaaa;
  border-radius: 5px;
  font-size: 15px;
`;

export const ChatBotao = styled.button`
  padding: 10px 20px;
  background-color: #02C2FF;
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Hind Siliguri', sans-serif;
  font-weight: 600;
  font-style: normal;
  cursor: pointer;
`;
