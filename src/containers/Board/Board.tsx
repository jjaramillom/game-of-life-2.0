import React from 'react';

import BoardEventsProvider from '../../state/BoardEventsProvider';
import Matrix from '../../components/Matrix/Matrix';
import Card from '../../components/UI/Card/Card';
import classes from './Board.module.scss';

const COLUMNS = 5;
const ROWS = 5;

const Board = () => {
  return (
    <Card>
      <BoardEventsProvider>
        <Matrix columns={COLUMNS} rows={ROWS} />
      </BoardEventsProvider>
    </Card>
  );
};

export default Board;
