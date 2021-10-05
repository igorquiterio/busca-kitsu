import React from 'react';
import {
  CharacterDescription,
  CharacterPicture,
  CharacterPresentation,
  Description,
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

interface ICharacterRowProps {
  character: ICharacter;
}

export function CharacterRow({ character }: ICharacterRowProps) {
  return (
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
  );
}
