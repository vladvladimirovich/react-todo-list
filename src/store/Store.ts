import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodosSlice";
import visibilityReducer from './VisibilitySlice';

export default configureStore({
  reducer: {
    todos: todoReducer,
    visibility: visibilityReducer,
  },
});
