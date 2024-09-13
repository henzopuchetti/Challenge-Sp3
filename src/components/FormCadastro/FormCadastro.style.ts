import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02C2FF;
  height: 100vh;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  font-style: normal;
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
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

export const FormCadastroInputLabel = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const FormCadastroLabel = styled.label`
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 700;
  font-style: normal;
`;

export const FormCadastroInput = styled.input`
  height: 25px;
  width: 245px;
  border-radius: 8px;
  border: 1px solid #747474;
  padding-left: 10px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const FormCadastroBotao = styled(Link)`
  width: 50%;
  height: 25px;
  border: none;
  border-radius: 8px;
  background-color: #02C2FF;
  color: white;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  font-style: normal;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
