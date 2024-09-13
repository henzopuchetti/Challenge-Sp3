import styled from 'styled-components';

export const IntegrantesMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const IntegrantesH2 = styled.h2`
  font-size: 30px;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  color: #02C2FF;
`;

export const IntegrantesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px; /* Espaçamento entre os integrantes */
  margin-top: 20px;
`;

export const IntegrantesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IntegrantesImg = styled.img`
  width: 400px;
  height: 500px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const IntegrantesParagrafo = styled.p`
  font-size: 20px;
  text-align: center;
  font-family: "Hind Siliguri", sans-serif;
  font-weight: 600;
  margin-bottom: 15px;
`;
