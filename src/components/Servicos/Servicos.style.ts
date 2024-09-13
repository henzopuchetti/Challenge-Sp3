
import styled from 'styled-components';

export const ServicosContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ServicosTitulo = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
  white-space: nowrap;
  overflow: hidden;
  color: #02c2ff;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 550px) {
    font-size: 24px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

export const ServicosImagem = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;
