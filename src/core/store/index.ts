import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../modules/todo/reducer/TodoSlice";

export const rootReducer = combineReducers({
  todos: todoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
