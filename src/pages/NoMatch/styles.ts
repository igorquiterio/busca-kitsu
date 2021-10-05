import styled from 'styled-components';

export const Container = styled.div`
  color: var(--text);
`;

export const MainContent = styled.div`
  width: 100%;
  height: calc(100vh - 113px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageDescription = styled.span`
  color: var(--primary);
  font-weight: 400;
  font-size: 1rem;
`;

export const ErrorCode = styled.span`
  color: var(--text);
  font-weight: 900;
  font-size: 3rem;
`;
