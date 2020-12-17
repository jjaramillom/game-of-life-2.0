import React from 'react';

import BoardEventsProvider from '../../state/BoardEventsProvider';
import Matrix from '../../components/Matrix/Matrix';
import Card from '../../components/UI/Card/Card';
import classes from './Board.module.scss';

const COLUMNS = 15;
const ROWS = 15;

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
