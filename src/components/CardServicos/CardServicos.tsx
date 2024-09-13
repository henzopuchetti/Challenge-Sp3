// CardServico.tsx
import React from 'react';
import { CardContainer, CardServicoTitulo, CardServicoDescricao, CardServicoBotao } from './CardServicos.style';

interface CardServicoProps {
  titulo: string;
  descricao: string;
  corDeFundo: string;
  corTexto: string;
  botaoTexto: string;
  linkDestino: string;
}

const CardServico: React.FC<CardServicoProps> = ({ titulo, descricao, corDeFundo, corTexto, botaoTexto, linkDestino }) => {  // Adicione linkDestino aqui
  return (
    <CardContainer corDeFundo={corDeFundo} corTexto={corTexto}>
      <CardServicoTitulo>{titulo}</CardServicoTitulo>
      <CardServicoDescricao>{descricao}</CardServicoDescricao>
      <CardServicoBotao to={linkDestino} corDeFundo={corTexto} corTexto={corDeFundo}>
        {botaoTexto}
      </CardServicoBotao>
    </CardContainer>
  );
};

export default CardServico;
