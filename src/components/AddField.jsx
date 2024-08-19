import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Slices/todoSlice";

function AddField() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addItem(value))
        setValue('')
    }

    const enterTrigger = (e) => {
        if (e.key === 'Enter') handleClick()
    }

  return (
    <>
      <div className="flex gap-2">
        <input
          className="bg-darkGreen border-2 rounded-xl p-2 w-2/3"
          placeholder="Enter a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          onKeyDown={enterTrigger}
        />
        <button
          className="bg-midGreen p-2 rounded-xl text-lime-900 font-bold text-green w-1/3"
          onClick={handleClick}
        >
          Add Item
        </button>
      </div>
    </>
  );
}

export default AddField;
