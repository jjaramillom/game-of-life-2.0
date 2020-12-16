import React from 'react';

import BoardEventsProvider from '../../state/BoardEventsProvider';
import Matrix from '../../components/Matrix/Matrix';
import Card from '../../components/UI/Card/Card';
import classes from './Board.module.scss';

const Board = () => {
  return (
    <Card>
      <BoardEventsProvider>
        <Matrix columns={5} rows={5} />
      </BoardEventsProvider>
    </Card>
  );
};

export default Board;
