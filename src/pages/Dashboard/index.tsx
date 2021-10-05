import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import api from '../../services/api';
import useDebounce from '../../usehooks';
import {
  CharacterGroup,
  CharacterLabel,
  CharacterInput,
  InputArea,
  ListArea,
  ListHeader,
  HeaderColumn,
  ColumnTitle,
  ListBody,
  ListRow,
  CharacterPresentation,
  CharacterDescription,
  Presentation,
  Description,
  CharacterPicture,
} from './styles';

interface Character {
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
  const [characterName, setCharacterName] = useState('');
  const [characterList, setCharacterList] = useState<Character[]>([]);

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

        const { data: newCharacterList } = response.data;

        setCharacterList(newCharacterList);
      } catch (error) {}
    }

    loadCharacters();
  }, [debouncedCharacterName, pageOffset]);

  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

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
      <ListArea>
        <ListHeader>
          <HeaderColumn percentage={25}>
            <ColumnTitle>Personagem</ColumnTitle>
          </HeaderColumn>
          <HeaderColumn percentage={75}>
            <ColumnTitle>Descrição</ColumnTitle>
          </HeaderColumn>
        </ListHeader>
        <ListBody>
          {characterList.map((character) => (
            <ListRow>
              <CharacterPresentation>
                {character.attributes.image && (
                  <CharacterPicture src={character.attributes.image.original} />
                )}
                <Presentation>
                  {character.attributes && character.attributes.canonicalName}
                </Presentation>
              </CharacterPresentation>
              <CharacterDescription>
                <Description>
                  {character.attributes && character.attributes.description}
                </Description>
              </CharacterDescription>
            </ListRow>
          ))}
        </ListBody>
      </ListArea>
    </>
  );
};

export default Dashboard;
