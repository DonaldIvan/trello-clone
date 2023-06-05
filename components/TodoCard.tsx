import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

interface Props {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps;
}

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) => {
  return (
    <div
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      className="space-y-2 rounded-md bg-white drop-shadow-md"
    >
      hello
    </div>
  );
};

export default TodoCard;
