import React from 'react';
import {
  CharacterDescription,
  CharacterPicture,
  CharacterPresentation,
  ColumnTitle,
  Description,
  HeaderColumn,
  ListArea,
  ListBody,
  ListHeader,
  ListRow,
  Presentation,
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

interface ICharacterTableProps {
  characterList: ICharacter[];
}

export function CharacterTable({ characterList }: ICharacterTableProps) {
  return (
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
              {character.attributes && character.attributes.image && (
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
  );
}
