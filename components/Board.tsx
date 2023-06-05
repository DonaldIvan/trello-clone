'use client';

import { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';

import { useBoardStore } from '@/store/BoardStore';
import Column from '@/components/Column';

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  console.log('board', board, Array.from(board.columns.entries()));
  const handleOnDragEnd = (result: DropResult) => {};
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column
                key={id}
                id={id}
                todos={column.todos}
                index={index}
              ></Column>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
