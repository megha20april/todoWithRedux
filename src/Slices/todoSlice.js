import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todoList : []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        addItem: (state, action) => {
            const item = {
                id: nanoid(),
                value: action.payload,
                completed: false,
                editMode: false
            }
            state.todoList.push(item)
        },
        deleteItem: (state, action) => {
            state.todoList = state.todoList.filter(item => item.id !== action.payload)
        },
        toggleComplete: (state, action) => {
            state.todoList = state.todoList.map(item => item.id == action.payload? {...item, completed: !item.completed} : item)
        },
        editItem: (state, action) => {
            state.todoList = state.todoList.map(item => item.id == action.payload.id? {...item, value: action.payload.value, editMode: !item.editMode} : item)
        }
    }
})

export default todoSlice.reducer
export const {addItem, deleteItem, toggleComplete, editItem} = todoSlice.actions