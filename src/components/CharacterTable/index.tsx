import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from '../../usehooks';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import {
  ArrowButtons,
  ColumnTitle,
  HeaderColumn,
  PageButton,
  PageText,
  TableArea,
  TableBody,
  TableFooter,
  TableHeader,
} from './styles';
import { CharacterRow } from '../CharacterRow';

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

interface ICharacterTableProps {
  characterList: ICharacter[];
  count: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}

export function CharacterTable({
  characterList,
  count,
  currentPage,
  handleChangePage,
}: ICharacterTableProps) {
  const [lastPage, setLastPage] = useState(0);
  const [paginate, setPaginate] = useState<number[]>([]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const _lastPage = Math.ceil(count / 10);
    let _initialNum: number;
    let qtdElements = 6;
    setLastPage(_lastPage);

    if (width < 720) {
      qtdElements = 3;
    }

    if (_lastPage <= qtdElements) {
      _initialNum = 1;
      qtdElements = _lastPage;
    } else {
      if (_lastPage - qtdElements < currentPage) {
        _initialNum = _lastPage - (qtdElements - 1);
      } else {
        _initialNum = currentPage;
      }
    }

    const _paginate = Array.from(
      { length: qtdElements },
      (_, i) => i + _initialNum
    );
    setPaginate(_paginate);
  }, [count, currentPage, width]);

  return (
    <TableArea>
      <TableHeader>
        <HeaderColumn percentage={25}>
          <ColumnTitle>Personagem</ColumnTitle>
        </HeaderColumn>
        <HeaderColumn percentage={75}>
          <ColumnTitle>Descrição</ColumnTitle>
        </HeaderColumn>
      </TableHeader>
      <TableBody>
        {characterList.map((character) => (
          <CharacterRow key={character.id} character={character} />
        ))}
      </TableBody>
      <TableFooter>
        <ArrowButtons disabled={currentPage === 1}>
          <FaCaretLeft size={24} onClick={() => handleChangePage(1)} />
        </ArrowButtons>
        {paginate.map((page, idx) => (
          <PageButton
            onClick={() => handleChangePage(page)}
            current={page === currentPage}
            disabled={page === currentPage}
            key={idx}
          >
            <PageText current={page === currentPage}>{page}</PageText>
          </PageButton>
        ))}
        <ArrowButtons disabled={currentPage === lastPage}>
          <FaCaretRight size={24} onClick={() => handleChangePage(lastPage)} />
        </ArrowButtons>
      </TableFooter>
    </TableArea>
  );
}
