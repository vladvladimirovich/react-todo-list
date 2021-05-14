import { createSlice } from "@reduxjs/toolkit";
import ITodo from "../components/ITodo";
import TodoState from "../components/TodoState";

const initialState: any = [
  { id: 0, name: "Create todo-app", state: TodoState.Planned },
];



const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {

    markAll: (state) => {
      state.map((todo: ITodo) => {
        todo.state = TodoState.Completed;
      })
    },

    unmarkAll: (state) => {
      state.map((todo: ITodo) => {
        todo.state = TodoState.Planned;
      })
    },

    add: (state, action) => {
      state.push(action.payload);

      // const name = action.payload.name.trim();
      // if (name !== "") {
      //   return {
      //     ...state,
      //     name: name.trim(),
      //   }
      // }
      // return {
      //   ...state
      // }
    },

    remove: (state, action) => {
      return state.filter((todo: ITodo) => action.payload !== todo.id);
    },

    toggle: (state, action) => {
      return state.map((todo: ITodo) => {
        const newTodo = { ...todo };
        if (action.payload === todo.id) {
          newTodo.state =
            todo.state === TodoState.Planned
              ? TodoState.Completed
              : TodoState.Planned;
        }
        return newTodo;
      });
    },
  },
});

export const { add, remove, toggle, markAll, unmarkAll } = todosSlice.actions;

export default todosSlice.reducer;
