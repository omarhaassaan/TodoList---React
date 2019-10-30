import React from "react";
import Todo from "./Todo";
class AddTodos extends React.Component {
  constructor() {
    super();
    this.state = { todoList: [] };
    this.id = 0;
  }
  DeleteTodo = fid => {
    this.setState({
      todoList: this.state.todoList.filter(ind => ind.id != fid)
    });
  };
  AddTodo = () => {
    if (document.querySelector("#in").value) {
      //   const comp = <Todo text={document.querySelector("#in").value} />;
      const comp = {
        text: document.querySelector("#in").value,
        id: this.id++,
        checked: false
      };
      this.setState({ todoList: [...this.state.todoList, comp] });
      document.querySelector("#in").value = "";
    }
  };
  countChecked() {
    let count = 0;
    this.state.todoList.map(item => {
      if (item.checked) count++;
    });
    return count;
  }
  render() {
    return (
      <div className="bg-dark">
        <input type="text" className="m-3" id="in" />
        <button className="btn btn-success m-3" onClick={this.AddTodo}>
          Add
        </button>
        <ul className="list-group">
          {this.state.todoList.map(item => (
            <Todo
              text={item.text}
              checked={item.checked}
              key={item.id}
              onDelete={() => {
                this.DeleteTodo(item.id);
              }}
              onCheck={() => {
                this.setState({
                  todoList: this.state.todoList.map(it => {
                    if (it.id == item.id) it.checked = !it.checked;
                    return it;
                  })
                });
              }}
            />
          ))}
        </ul>
        <span className="badge badge-primary m-3">
          Total Todos : {this.state.todoList.length}
        </span>
        <span className="badge badge-primary m-3">
          Total Checked Todos : {this.countChecked()}
        </span>
        <span className="badge badge-primary m-3">
          Total Unchecked Todos :{this.state.todoList.length-this.countChecked()}
        </span>
      </div>
    );
  }
}
export default AddTodos;
