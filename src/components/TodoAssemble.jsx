import { useSelector } from "react-redux";
import Todo from "./Todo";


function TodoAssemble() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <>
      {todoList.map((item) => (
        <div
          className="flex gap-2 bg-lightGreen rounded-xl p-2 justify-between"
          key={item.id}
        >
          <Todo item={item} />
        </div>
      ))}
    </>
  );
}

export default TodoAssemble;
