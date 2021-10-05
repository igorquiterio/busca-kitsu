import styled from 'styled-components';

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
  @media (max-width: 720px) {
    padding: 0px 42px;
    margin-bottom: 12px;
  }
`;
