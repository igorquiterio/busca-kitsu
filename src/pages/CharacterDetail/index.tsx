import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import api from '../../services/api';
import {
  BackButton,
  CharBox,
  CharImg,
  CharName,
  Container,
  HeaderBox,
  IconBox,
  InfoBox,
  LoadBox,
  Loading,
  MediaBox,
  MediaImg,
  MediaName,
  MediasBox,
  MediasTitle,
} from './styles';

interface ICharacterDetailProps {
  item: string;
}

interface ICharacter {
  id: number;
  attributes: {
    canonicalName: string;
    description: string;
    image: {
      original: string;
    };
  };
  relationships: {
    mediaCharacters: {
      links: {
        related: string;
      };
    };
  };
}

interface ICharacterMedia {
  relationships: {
    media: {
      links: {
        related: string;
      };
    };
  };
}

interface IMedia {
  id: number;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    posterImage: {
      original: string;
    };
  };
}

const CharacterDetail: React.FC<ICharacterDetailProps> = ({ item }) => {
  const [characterInfo, setCharacterInfo] = useState<ICharacter>();
  const [mediaInfo, setMediaInfo] = useState<IMedia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacterInfo() {
      try {
        setLoading(true);
        const url = `characters/${item}`;

        const charResponse = await api.get(url);

        const { data: _characterInfo } = charResponse.data;

        setCharacterInfo(_characterInfo);
        const CharMediaResponse = await api.get(url + '/media-characters');

        const { data: _characterMedia }: { data: Array<ICharacterMedia> } =
          CharMediaResponse.data;

        _characterMedia.forEach(async (char) => {
          const newUrl = char?.relationships.media.links.related;

          const newMediaResponse = await api.get(newUrl);

          const { data: _newMediaInfo } = newMediaResponse.data;

          setMediaInfo((prev) => [...prev, _newMediaInfo]);
        });
        setLoading(false);
      } catch (error) {}
    }

    loadCharacterInfo();
  }, [item]);

  return (
    <>
      <HeaderBox>
        <IconBox to='/'>
          <BackButton />
        </IconBox>
        <Header />
      </HeaderBox>
      <Container>
        <InfoBox>
          {characterInfo?.id && (
            <CharBox>
              <CharName>{characterInfo.attributes.canonicalName}</CharName>
              <CharImg src={characterInfo.attributes.image.original} />
              <span>{characterInfo.attributes.description}</span>
            </CharBox>
          )}
          {mediaInfo.length > 0 && (
            <MediasBox>
              <MediasTitle>Presente em:</MediasTitle>
              {mediaInfo.map((media) => (
                <MediaBox>
                  <MediaName>{media.attributes.canonicalTitle}</MediaName>
                  <MediaImg src={media.attributes.posterImage.original} />
                </MediaBox>
              ))}
            </MediasBox>
          )}
        </InfoBox>
        <LoadBox>{loading === true && <Loading />}</LoadBox>
      </Container>
    </>
  );
};

export default CharacterDetail;
