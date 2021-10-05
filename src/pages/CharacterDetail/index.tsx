import React from 'react';
import { Header } from '../../components/Header';
import { Container } from './styles';

interface ICharacterDetailProps {
  item: string;
}

const CharacterDetail: React.FC<ICharacterDetailProps> = ({ item }) => {
  return (
    <>
      <Header />
      <Container>{item}</Container>
    </>
  );
};

export default CharacterDetail;
