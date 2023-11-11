import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ITodoState } from "../models/interfaces";
import { TTodos } from "../models/types";
import { fetchTodos, addTodos, deleteTodo, updateTodo } from "./actions";

export const todosAdapter = createEntityAdapter<TTodos>({
  selectId: (todo) => todo.id,
});

const initialState: ITodoState = {
  todos: todosAdapter.getInitialState(),
  isLoading: false,
  error: null,
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      todosAdapter.setAll(state.todos, action.payload);
      state.isLoading = false;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });

    builder.addCase(addTodos.fulfilled, (state, action) => {
      todosAdapter.setOne(state.todos, action.payload);
    });
    builder.addCase(addTodos.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      todosAdapter.removeOne(state.todos, action.payload);
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });

    builder.addCase(updateTodo.fulfilled, (state, action) => {
      todosAdapter.upsertOne(state.todos, action.payload);
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = "Ошибка"; // todo
    });
  },
});

export default TodoSlice.reducer;
