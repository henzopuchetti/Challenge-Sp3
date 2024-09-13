import React from 'react';
import { IntegrantesMain, IntegrantesH2, IntegrantesContainer, IntegrantesDiv, IntegrantesImg, IntegrantesParagrafo } from './DadosIntegrantes.style';
import ImgIntegrante1 from "../../assets/MicrosoftTeams-image (3).png";
import ImgIntegrante2 from "../../assets/MicrosoftTeams-image (2).png";


const DadosIntegrantes: React.FC = () => {
  return (
    <IntegrantesMain>
      <IntegrantesH2>Integrantes da HH</IntegrantesH2>
      <IntegrantesContainer>
        <IntegrantesDiv>
          <IntegrantesImg src={ImgIntegrante1} alt="integrante1" />
          <IntegrantesParagrafo>Henzo Boschiero Puchetti - Rm555179</IntegrantesParagrafo>
        </IntegrantesDiv>
        <IntegrantesDiv>
          <IntegrantesImg src={ImgIntegrante2} alt="integrante2" />
          <IntegrantesParagrafo>Humberto de Souza Silva - Rm558482</IntegrantesParagrafo>
        </IntegrantesDiv>
      </IntegrantesContainer>
    </IntegrantesMain>
  );
};

export default DadosIntegrantes;
