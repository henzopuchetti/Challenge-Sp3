import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02C2FF;
  height: 100vh;
  font-weight: 700;
`;

export const FormCadastroContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 500px;
`;

export const FormCadastroTitulo = styled.h1`
  width: 90%;
  font-size: 20px;
  text-align: center;
`;

export const FormCadastroInputLabel = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const FormCadastroLabel = styled.label`
  font-size: 12px;
  font-weight: 700;
  margin-top: 10px;
`;

export const FormCadastroInput = styled.input`
  height: 25px;
  width: 265px;
  font-size: 12px;
  border-radius: 8px;
  border: none;
  padding-left: 10px;
  background-color: #D9D9D9;  
`;

export const FormCadastroBotao = styled(Link)`
  width: 50%;
  height: 25px;
  border: none;
  border-radius: 8px;
  background-color: #02C2FF;
  color: white; 
  font-weight: 700;
  margin: 0 auto;
  margin-top: 15px;
  text-align: center;
  cursor: pointer;
`;
