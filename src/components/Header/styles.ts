import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  color: var(--primary);
  margin-bottom: 34px;
`;

export const MainTitle = styled.div`
  display: flex;
`;

export const RegularHeaderText = styled.h1`
  font-weight: 300;
`;

export const Candidate = styled.div`
  @media (max-width: 720px) {
    display: none;
  }
`;
