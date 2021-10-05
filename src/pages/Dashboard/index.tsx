import React, { useState, useEffect } from 'react';
import { CharacterTable } from '../../components/CharacterTable';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { useDebounce } from '../../usehooks';
import {
  CharacterGroup,
  CharacterLabel,
  CharacterInput,
  InputArea,
} from './styles';

interface ICharacter {
  id: number;
  attributes: {
    canonicalName: string;
    description: string;
    image: {
      original: string;
    };
  };
}

const Dashboard: React.FC = () => {
  const pageLimit = 10;

  const [pageOffset, setPageOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [characterName, setCharacterName] = useState('');
  const [characterList, setCharacterList] = useState<ICharacter[]>([]);

  const debouncedCharacterName = useDebounce<string>(characterName, 400);

  useEffect(() => {
    async function loadCharacters() {
      try {
        const url =
          `characters?page[limit]=${pageLimit}&page[offset]=${pageOffset}` +
          (debouncedCharacterName.length > 0
            ? `&filter[name]=${debouncedCharacterName}`
            : '');

        const response = await api.get(url);

        const {
          data: newCharacterList,
          meta: { count },
        } = response.data;

        setCount(count);
        setCharacterList(newCharacterList);
      } catch (error) {}
    }

    loadCharacters();
  }, [debouncedCharacterName, pageOffset]);

  function handleChangePage(page: number) {
    setPageOffset((page - 1) * 10);
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Header />
      <InputArea>
        <CharacterGroup>
          <CharacterLabel htmlFor='character'>
            Nome do Personagem
          </CharacterLabel>
          <CharacterInput
            id='character'
            value={characterName}
            onChange={(e) => {
              setCharacterName(e.target.value);
              setPageOffset(0);
            }}
          />
        </CharacterGroup>
      </InputArea>
      {characterList.length > 0 && (
        <CharacterTable
          characterList={characterList}
          count={count}
          currentPage={pageOffset / 10 + 1}
          handleChangePage={handleChangePage}
        />
      )}
    </>
  );
};

export default Dashboard;
