import {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./Slices/todoSlice";
import TodoAssemble from "./components/todoAssemble";
import AddField from './components/AddField';

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoList);

  //Local Storage shit!!

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoList")); // localstorage stores data in string format
    if (data && data.length) data.forEach(item => dispatch(addItem(item.value))) // do this only when data actually exists
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <div className="fixed inset-0 bg-yellow">
        
          <div className="flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-darkGreen rounded-xl">
            <h1 className="text-center font-bold text-white text-2xl">
              My TODO List ✏
            </h1>
            <AddField />

            <TodoAssemble />
          </div>
      </div>
    </>
  );
}

export default App;
