'use client';

import { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { useBoardStore } from '@/store/BoardStore';

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  console.log('board', board);
  return (
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div></div>}
    //   </Droppable>
    // </DragDropContext>
    <div></div>
  );
};

export default Board;
