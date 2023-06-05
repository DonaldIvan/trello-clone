import { useBoardStore } from '@/store/BoardStore';
import { XCircleIcon } from '@heroicons/react/24/solid';
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

import { useState, useEffect } from 'react';
import getUrl from '@/lib/getUrl';
import Image from 'next/image';

interface Props {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}

const TodoCard = ({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  dragHandleProps,
}: Props) => {
  const deleteTodo = useBoardStore((state) => state.deleteTodo);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (todo.image) {
      const fetchImage = async () => {
        const url = await getUrl(todo.image!);
        url && setImageUrl(url.toString());
      };
      fetchImage();
    }
  }, [todo]);
  return (
    <div
      {...dragHandleProps}
      {...draggableProps}
      ref={innerRef}
      className="space-y-2 rounded-md bg-white drop-shadow-md"
    >
      <div className="flex items-center justify-between p-5">
        <p>{todo.title}</p>
        <button
          onClick={() => deleteTodo(index, todo, id)}
          className="text-red-500 hover:text-red-600"
        >
          <XCircleIcon className="ml-5 h-8 w-8" />
        </button>
      </div>
      {imageUrl ? (
        <div className="h-full w-full rounded-b-md">
          <Image
            src={imageUrl}
            alt="Todo image"
            width={400}
            height={400}
            className="w-full rounded-b-md object-contain"
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoCard;
