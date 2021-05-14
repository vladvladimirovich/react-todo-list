import DeleteButton from "./DeleteButton";

function TodoItem(props: any) {


  return (
    <li key={props.key} className={props.className} onClick={props.onToggle}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={props.checked}/>
        <label>{props.children}</label>
        <DeleteButton
          onClick={(e: any) => {
            props.onRemove();
            e.stopPropagation();
          }}
        />
      </div>
    </li>
  );
}

export default TodoItem;
