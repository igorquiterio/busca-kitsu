import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const goToDetais = (id: number) => {
    let path = `/detail/${id}`;
    history.push(path);
  };

  return (
    <ListRow onClick={() => goToDetais(character.id)}>
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
