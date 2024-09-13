import styled from 'styled-components';


export const FormChamadosMain = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormChamadosFundo = styled.div`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 500px;
  margin: 40px 0;
  border: 2px solid #02C2FF;
`;

export const FormChamadosH1 = styled.h1`
  width: 90%;
  font-size: 20px;
  text-align: center;
  color: #02C2FF;
`;

export const FormChamadosInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  label {
    font-weight: 700;
  }
`;

export const FormChamadosInput = styled.input`
  height: 30px;
  width: 280px;
  border-radius: 8px;
  border: 1px solid #747474;
  padding-left: 10px;
  font-weight: 500;
  font-size: 15px;
`;

export const FormChamadosBotao = styled.div`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #02C2FF;
  color: white;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid #02C2FF;
`;
