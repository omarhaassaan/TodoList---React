import React from "react";

const Todo = props => {
  return (
    <li className="list-group-item bg-secondary">
      <input onChange={props.onCheck} type="checkbox" defaultChecked={props.checked} />
      <div className="d-inline m-3">{props.text}</div>
      <button className="btn btn-danger m-3" onClick={props.onDelete}>
        Delete
      </button>
    </li>
  );
};
export default Todo;
