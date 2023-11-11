import { ITodoState } from "./interfaces";

export type TTodos = {
  createdAt: string;
  done: boolean;
  id: number;
  title: string;
  updatedAt: string;
};
export type TTodosRespons = TTodos[];
export type TAddTodosRespons = TTodos;
export type TDeleteTodosRespons = number;
export type TUpdateTodosRespons = TTodos;
export type TMethod = "GET" | "POST" | "PUT" | "DELETE";
export type TTodosRootState = {
  todos: ITodoState;
};
export type TParams = {
  title: string;
  method: TMethod;
};
export type TDeleteParams = number;
export type TUpdateParams = {
  id: number;
  done: boolean;
};
