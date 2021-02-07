import React from 'react';

import BoardEventsProvider from 'state/BoardEventsProvider';
import Matrix from 'components/Matrix/Matrix';
import Card from 'components/UI/Card/Card';

const COLUMNS = 55;
const ROWS = 55;

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
