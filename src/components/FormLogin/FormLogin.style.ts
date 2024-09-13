import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02C2FF;
  height: 100vh;

`;

export const FormLoginContainer = styled.form`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 300px;
`;

export const FormLoginTitulo = styled.h1`
  width: 80%;
  font-size: 20px;
  text-align: center;
`;

export const FormLoginInputLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLoginLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
`;

export const FormLoginInput = styled.input`
  height: 25px;
  width: 265px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  padding-left: 10px;
  background-color: #D9D9D9;
`;

export const FormLoginA = styled.div`
  margin-bottom: 5px;
`;

export const FormLoginLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #02C2FF;
`;

export const FormLoginBotao = styled(Link)`
  width: 120px;
  height: 25px;
  border: none;
  border-radius: 8px;
  background-color: #02C2FF;
  color: white;
  font-size: 15px;
  font-weight: 600; 
  margin: 0 auto;
  text-align: center;
`;
