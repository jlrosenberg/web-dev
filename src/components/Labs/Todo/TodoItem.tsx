import React from 'react';

interface Props {
  todo: {
    done: boolean
    title: string
    status: string
  }
}


const TodoItem: React.FC<Props> = ({
  todo = {
    done: true,
    title: "Buy milk",
    status: "COMPLETED",
  },

}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={todo.done} />
      {todo.title}({todo.status})
    </li>
  );
};

export default TodoItem;
