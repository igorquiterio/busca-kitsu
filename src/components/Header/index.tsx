import React from 'react';
import { Container, MainTitle, RegularHeaderText, Candidate } from './styles';

export function Header() {
  return (
    <Container>
      <MainTitle>
        <h1>BUSCA KITSU</h1>
        <RegularHeaderText>TESTE FRONT-END</RegularHeaderText>
      </MainTitle>
      <Candidate>
        <RegularHeaderText>IGOR DA COSTA QUITERIO</RegularHeaderText>
      </Candidate>
    </Container>
  );
}
