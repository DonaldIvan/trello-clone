import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import TodoCard from '@/components/TodoCard';
import { useBoardStore } from '@/store/BoardStore';
import { useModalStore } from '@/store/ModalStore';

interface Props {
  id: TypedColumn;
  todos: Todo[];
  index: number;
}

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: 'To do',
  inprogress: 'In Progress',
  done: 'Done',
};
const Column = ({ id, todos: partialTodos, index }: Props) => {
  const [searchString, setNewTodoType] = useBoardStore((state) => [
    state.searchString.toLowerCase().trim(),
    state.setNewTodoType,
  ]);

  const openModal = useModalStore((state) => state.openModal);
  const todos = searchString
    ? partialTodos.filter((todo) =>
        todo.title.toLowerCase().includes(searchString),
      )
    : partialTodos;

  const handleAddTodo = () => {
    setNewTodoType(id);
    openModal();
  };
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`rounded-2xl p-2 shadow-sm ${
                  snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
                }`}
              >
                <h2 className="flex justify-between p-2 text-xl font-bold">
                  {idToColumnText[id]}
                  <span className="rounded-full bg-gray-200 px-2 py-1 text-sm font-normal text-gray-500">
                    {todos.length}
                  </span>
                </h2>
                <div className="space-y-2">
                  {todos.map((todo, index) => (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}
                    >
                      {(provided) => (
                        <TodoCard
                          todo={todo}
                          index={index}
                          id={id}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <div className="flex items-end justify-end p-2">
                    <button
                      onClick={handleAddTodo}
                      className="text-green-500 hover:text-green-600"
                    >
                      <PlusCircleIcon className="h-10 w-10" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default Column;
