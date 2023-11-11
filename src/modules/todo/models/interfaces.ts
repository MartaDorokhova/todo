import { EntityState } from "@reduxjs/toolkit";
import { TTodos } from "./types";

export interface ITodoState {
  todos: EntityState<TTodos>;
  isLoading: boolean;
  error: string | null;
}
