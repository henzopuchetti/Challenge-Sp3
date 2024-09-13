import styled from 'styled-components';

export const DiferencialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const DiferencialTitulo = styled.h2`
  font-size: 32px;
  color: #02C2FF;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 550px) {
    font-size: 38px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }
`;

export const DiferencialParagrafo = styled.p`
    text-align: justify;
    width: 90%;
    font-size: 18px;
    color: #555;
`;
