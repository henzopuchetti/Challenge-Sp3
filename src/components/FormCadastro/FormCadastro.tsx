import React from 'react';
import { Main, FormContainer, Title, InputLabel, Label, Input, Button } from './FormCadastro.style';

const FormCadastro: React.FC = () => {
  return (
    <Main>
      <FormContainer>
        <Title>Seja bem-vindo ao Cadastro da HH</Title>
        <InputLabel>
          <Label htmlFor="fullName">Nome Completo:</Label>
          <Input type="text" id="fullName" name="fullName" required />

          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />

          <Label htmlFor="password">Senha:</Label>
          <Input type="password" id="password" name="password" required />

          <Label htmlFor="confirmPassword">Confirmar Senha:</Label>
          <Input type="password" id="confirmPassword" name="confirmPassword" required />

          <Label htmlFor="birthDate">Data de Nascimento:</Label>
          <Input type="text" id="birthDate" name="birthDate" placeholder="dd/mm/aaaa" required />
          
          <Button href="login.html">Cadastrar</Button>
        </InputLabel>
      </FormContainer>
    </Main>
  );
}

export default FormCadastro;