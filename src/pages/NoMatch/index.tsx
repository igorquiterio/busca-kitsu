import React from 'react';
import { Header } from '../../components/Header';
import { Container, MainContent, ErrorCode, PageDescription } from './styles';

const NoMatch: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainContent>
        <ErrorCode>404</ErrorCode>
        <PageDescription>PAGINA NÃO ENCONTRADA</PageDescription>
      </MainContent>
    </Container>
  );
};

export default NoMatch;
