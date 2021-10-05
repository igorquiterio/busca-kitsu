import styled, { css } from 'styled-components';

interface IHeaderColumnProps {
  percentage: number;
}
interface IPageTextProps {
  current: boolean;
}

export const TableArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TableHeader = styled.div`
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

  @media (max-width: 720px) {
    ${(props) =>
      props.percentage === 75
        ? css`
            display: none;
          `
        : css`
            width: 100%;
            padding-left: 30px;
          `}
  }
`;

export const ColumnTitle = styled.span`
  color: var(--background);
  font-weight: 400;
  font-size: 1rem;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 16px;
`;

export const TableFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;
`;

export const PageButton = styled.button<IPageTextProps>`
  min-width: 32px;
  min-height: 32px;
  position: relative;

  background: var(--background);
  border: 1px solid var(--primary);
  border-radius: 50%;

  & + & {
    margin-left: 20px;
  }

  ${(props) =>
    props.current &&
    css`
      background: var(--primary);
      &:disabled {
        opacity: 1;
        cursor: auto;
      }
    `}
`;

export const PageText = styled.span<IPageTextProps>`
  color: var(--primary);
  font-size: 1rem;
  ${(props) =>
    props.current &&
    css`
      color: var(--background);
    `}
`;

export const ArrowButtons = styled.button`
  border: 0px;
  background: var(--background);
  color: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 12px;

  @media (max-width: 720px) {
    margin: 0 60px;
  }
`;
