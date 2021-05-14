import { useDispatch } from "react-redux";
import { all, planned, completed } from "../store/VisibilitySlice";

function TodoFilter() {
  const dispatch = useDispatch();

  return (
    <ul className="filters">
      <li onClick={() => dispatch(all())}>
        <a className="selected" href="#/">All</a>
      </li>
      <li onClick={() => dispatch(planned())}>
        <a href="#/active">Active</a>
      </li>
      <li onClick={() => dispatch(completed())}>
        <a href="#/active">Active</a>
      </li>
    </ul>
  );
}

export default TodoFilter;
