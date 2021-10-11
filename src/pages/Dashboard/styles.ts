import styled, { keyframes } from 'styled-components';
import { FaCircleNotch } from 'react-icons/fa';

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

const rotate = keyframes`
 from {
    -webkit-transform: rotate(0deg);
    }
to {
    -webkit-transform: rotate(359deg);
}
`;

export const LoadBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Loading = styled(FaCircleNotch)`
  width: 20px;
  height: 20px;
  color: var(--primary);

  margin-left: 10px;

  animation-name: ${rotate};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;
