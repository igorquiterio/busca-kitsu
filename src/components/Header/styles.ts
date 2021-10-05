import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  color: var(--primary);
  margin-bottom: 34px;

  @media (max-width: 720px) {
    padding: 0px 42px;
    margin-bottom: 12px;
  }
`;

export const MainTitle = styled.div`
  display: flex;

  h1:first-child {
    &:after {
      display: flex;
      flex-direction: column;

      content: '';
      display: block;
      width: 54px;
      height: 4px;
      background: var(--primary);
    }
  }
`;

export const RegularHeaderText = styled.h1`
  font-weight: 300;
`;

export const Candidate = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;
