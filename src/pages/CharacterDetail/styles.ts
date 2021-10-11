import styled, { keyframes } from 'styled-components';
import { FaCircleNotch, FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const HeaderBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 123px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const BackButton = styled(FaChevronLeft)`
  margin-right: 10px;
  margin-top: 12px;

  @media (max-width: 720px) {
    margin-left: 10px;
    margin-right: 0px;
    width: 20px;
  }
`;

export const IconBox = styled(Link)`
  display: flex;
  justify-content: flex-end;
  color: var(--primary);
`;

export const InfoBox = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    max-width: 330px;
    padding: 0 20px;
  }
`;
export const CharBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CharName = styled.h2`
  margin-bottom: 5px;
`;

export const CharImg = styled.img`
  margin-bottom: 20px;
`;

export const MediasBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
`;

export const MediaBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
`;

export const MediasTitle = styled.h2`
  text-transform: uppercase;
  width: 100%;
`;

export const MediaName = styled.h3`
  color: var(--text);
`;

export const MediaImg = styled.img`
  margin-bottom: 20px;
  max-width: 300px;

  @media (max-width: 720px) {
    max-width: 280px;
  }
`;
