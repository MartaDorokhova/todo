import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoApi } from "../api";
import {
  TTodosRespons,
  TAddTodosRespons,
  TDeleteTodosRespons,
  TParams,
  TDeleteParams,
  TUpdateTodosRespons,
  TUpdateParams,
} from "../models/types";

export const fetchTodos = createAsyncThunk<TTodosRespons>(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { todos } = await todoApi({
        method: "GET",
      });
      return todos;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addTodos = createAsyncThunk<TAddTodosRespons, TParams>(
  "todos/addTodos",
  async (params, { rejectWithValue }) => {
    try {
      const { todo } = await todoApi({
        method: params.method,
        body: { title: params.title },
      });
      return todo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteTodo = createAsyncThunk<TDeleteTodosRespons, TDeleteParams>(
  "todos/deleteTodo",
  async (id, { rejectWithValue }) => {
    try {
      await todoApi({
        method: "DELETE",
        url: `/${id}`,
      });
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateTodo = createAsyncThunk<TUpdateTodosRespons, TUpdateParams>(
  "todos/updateTodo",
  async (params, { rejectWithValue }) => {
    try {
      const { todo } = await todoApi({
        method: "PUT",
        body: { done: params.done },
        url: `/${params.id}`,
      });
      return todo;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
