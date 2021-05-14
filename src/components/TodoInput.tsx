import { useState } from "react";
import TodoState from "../components/TodoState";
import { useDispatch } from "react-redux";
import { add } from "../store/TodosSlice";

function getId() {
  return new Date().getTime();
}

function TodoInput(props: any) {
  const [todoName, setTodoName] = useState("");
  const dispatch = useDispatch();
  const onInputChange = (event: any) => {
    setTodoName(event.target.value);
  };

  const clearTextInput = () => {
    setTodoName("");
  };

  return (
      <input className="new-todo"
        value={todoName}
        onChange={onInputChange}
        onKeyDown={(event: any) => {
          if (event.key === "Enter") {
            console.log(event);
            dispatch(
              add({ id: getId(), name: todoName, state: TodoState.Planned })
            );
            clearTextInput();
          }
        }}
        placeholder="ASD"
        type="text"
        autoFocus
      />
  );
}

export default TodoInput;
