import { createSelector } from "@reduxjs/toolkit";
import { TTodosRootState } from "../models/types";
import { todosAdapter } from "./TodoSlice";

export const todosSelectors = todosAdapter.getSelectors<TTodosRootState>(
  (state) => {
    return state.todos.todos;
  }
);

export const getTodosSelectors = createSelector(
  todosSelectors.selectEntities,
  (todos) => Object.values(todos)
);

export const getTodosLengthSelectors = createSelector(
  todosSelectors.selectEntities,
  (todos) => Object.values(todos).length
);
