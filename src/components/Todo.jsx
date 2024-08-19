import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteItem, editItem, toggleComplete } from "../Slices/todoSlice";

function Todo({ item }) {
  const [value, setValue] = useState(item.value);

  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(toggleComplete(item.id))
  }

  const handleDelete = () => {
    dispatch(deleteItem(item.id))
  }

  return (
    <>
      <div className="flex gap-4 items-center">
        <input onClick={handleCheck} type="checkbox" disabled={item.editMode}/>

        <input
          type="text"
          value={value}
          className={`bg-lightGreen rounded-xl p-2 ${item.completed ? "line-through" : ""} ${item.editMode ? "border-2" : ""}`}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          readOnly={!item.editMode}
        />
      </div>
      <div className="flex gap-2 items-center">
        <IconButton
          aria-label="edit/done"
          onClick={() => {
            dispatch(editItem({id: item.id, value}))
          }}
          size="small"
          disabled={item.completed}
        >
          {item.editMode? <CheckCircleIcon className="text-darkGreen" /> :
          <EditNoteIcon className="text-darkGreen" />}
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDelete} size="small">
          <DeleteRoundedIcon className="text-darkGreen" />
        </IconButton>
      </div>
    </>
  );
}

export default Todo;
