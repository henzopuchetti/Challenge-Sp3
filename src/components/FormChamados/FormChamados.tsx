import React from 'react';
import { Link } from 'react-router-dom';
import { FormChamadosMain, FormChamadosFundo, FormChamadosH1, FormChamadosInputLabel, FormChamadosInput, FormChamadosBotao } from './FormChamados.style';

const FormChamados: React.FC = () => {
  return (
    <FormChamadosMain>
      <FormChamadosFundo>
        <FormChamadosH1>Abra seu chamado agora mesmo!</FormChamadosH1>
        <FormChamadosInputLabel>
          <label htmlFor="nome">Nome Completo:</label>
          <FormChamadosInput type="text" id="nome" />
        </FormChamadosInputLabel>
        <FormChamadosInputLabel>
          <label htmlFor="email">Email:</label>
          <FormChamadosInput type="email" id="email" placeholder="(dd) 111111111" />
        </FormChamadosInputLabel>
        <FormChamadosInputLabel>
          <label htmlFor="marca">Marca do Veículo:</label>
          <FormChamadosInput type="text" id="marca" />
        </FormChamadosInputLabel>
        <FormChamadosInputLabel>
          <label htmlFor="modelo">Modelo do Veículo:</label>
          <FormChamadosInput type="text" id="modelo" />
        </FormChamadosInputLabel>
        <FormChamadosInputLabel>
          <label htmlFor="descricao">Descrição do Problema:</label>
          <FormChamadosInput type="text" id="descricao" placeholder="ex: estava andando e saiu fumaça do motor" />
        </FormChamadosInputLabel>
        <Link to="/">
          <FormChamadosBotao>Enviar</FormChamadosBotao>
        </Link>
      </FormChamadosFundo>
    </FormChamadosMain>
  );
};

export default FormChamados;
