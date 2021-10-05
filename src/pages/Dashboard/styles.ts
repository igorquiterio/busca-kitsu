import styled from 'styled-components';

interface IHeaderColumnProps {
  percentage: number;
}

export const CharacterGroup = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const CharacterLabel = styled.label`
  color: var(--primary);
`;

export const CharacterInput = styled.input`
  height: 31px;
  max-width: 400px;
  width: 100%;
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  padding: 0 10px;

  &:focus {
    outline: var(--primary) solid 1px;
  }
`;

export const InputArea = styled.div`
  margin-bottom: 34px;
`;

export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

export const HeaderColumn = styled.div<IHeaderColumnProps>`
  background: var(--primary);
  height: 37px;
  width: ${(props) => props.percentage}%;

  display: flex;
  align-items: center;
  padding-left: 13px;

  & + div {
    margin-left: 10px;
  }
`;

export const ColumnTitle = styled.span`
  color: var(--background);
  font-weight: 400;
  font-size: 1rem;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListRow = styled.div`
  height: 112px;
  border-bottom: 1px solid #d4202620;
  line-height: 1.1;
  padding: 20px 0;

  display: flex;

  &:hover {
    background: #d4202610;
  }
`;

export const CharacterPresentation = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
`;

export const CharacterPicture = styled.img`
  width: 58px;
  min-width: 58px;
  height: 58px;
  margin-left: 10px;
  margin-right: 10px;

  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 10%;
`;

export const Presentation = styled.span`
  color: var(--text);
  font-size: 1rem;

  text-overflow: ellipsis;
  overflow: hidden;
  word-wrap: break-word;
`;

export const CharacterDescription = styled.div`
  width: 75%;
  max-height: 112px;
  margin-left: 10px;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const Description = styled.span`
  color: var(--text);
  font-size: 1rem;

  overflow: hidden;
`;
