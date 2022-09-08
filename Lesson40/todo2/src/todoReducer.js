import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
        numberOfTodoHasBeenCompleted: 0,
        ?? : ???
    },
    reducers: {
        addTodo : (state) => {
            state.value.push(1);
        },
        completeTodo: (state) => {
            state.numberOfTodoHasBeenCompleted ++;
        },
        clearStore: (state) => {
            state.numberOfTodoHasBeenCompleted = 0;
            state.value = [];
        }
    }
});

export const { addTodo, completeTodo, clearStore } = todoSlice.actions

export default todoSlice.reducer
