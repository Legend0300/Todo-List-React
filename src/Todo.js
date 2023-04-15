import React, { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "todoApp.todos";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [todoName, setTodoName] = useState("");
  const [status, setStatus] = useState(false);
  const [editingTodoIndex, setEditingTodoIndex] = useState(null);
  const [editingTodoName, setEditingTodoName] = useState("");
  const [editingTodoStatus, setEditingTodoStatus] = useState(false);
  const [editingName, setEditingName] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = {
      ...updatedTodos[index],
      status: !updatedTodos[index].status
    };
    setTodos(updatedTodos);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.checked);
  };

  const handleTodo = (e) => {
    e.preventDefault();
    const todo = { name, todoName, status };
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
    setName("");
    setTodoName("");
    setStatus(false);
  };

  const handleEdit = (index) => {
    setEditingTodoIndex(index);
    setEditingName(todos[index].name);
    setEditingTodoName(todos[index].todoName);
    setEditingTodoStatus(todos[index].status);
  };

  const handleEditingNameChange = (e) => {
    setEditingName(e.target.value);
  };

  const handleEditingTodoNameChange = (e) => {
    setEditingTodoName(e.target.value);
  };

  const handleEditingTodoStatusChange = (e) => {
    setEditingTodoStatus(e.target.checked);
  };

  const handleSaveEdit = () => {
    const updatedTodos = [...todos];
    updatedTodos[editingTodoIndex] = {
      ...updatedTodos[editingTodoIndex],
      name: editingName,
      todoName: editingTodoName,
      status: editingTodoStatus,
    };
    setTodos(updatedTodos);
    setEditingTodoIndex(null);
    setEditingTodoName("");
    setEditingName("");
    setEditingTodoStatus(false);
  };

  const handleCancelEdit = () => {
    setEditingTodoIndex(null);
    setEditingTodoName("");
    setEditingTodoStatus(false);
  };

  const handleRemove = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
<div className="container">
  <h1 className="text-center mt-3 mb-5">Todo List</h1>
  {todos.length === 0 ? (
    <div className="text-center">
      <h3>No todos available</h3>
      <form onSubmit={handleTodo} className="form-inline justify-content-center">
        <div className="form-group">
          <label className="mr-2">Name: </label>
          <input
            value={name}
            type="text"
            className="form-control mr-2"
            placeholder="Enter Name"
            onChange={handleNameChange}
          />
          <label className="mr-2">Todo: </label>
          <input
            value={todoName}
            type="text"
            className="form-control mr-2"
            placeholder="Enter Todo"
            onChange={handleTodoNameChange}
          />
          <div className="form-check mr-2">
            <input
              checked={status}
              onChange={handleStatusChange}
              type="checkbox"
              className="form-check-input"
              id="TodoCheckbox"
            />
            <label className="form-check-label" htmlFor="TodoCheckbox">
              Completed
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  ) : (
    <>
      <div className="text-center">
        <h3>Total Todos: {todos.length}</h3>
        <form onSubmit={handleTodo} className="form-inline justify-content-center">
          <div className="form-group">
            <label className="mr-2">Name: </label>
            <input
              value={name}
              type="text"
              className="form-control mr-2"
              placeholder="Enter Name"
              onChange={handleNameChange}
            />
            <label className="mr-2">Todo: </label>
            <input
              value={todoName}
              type="text"
              className="form-control mr-2"
              placeholder="Enter Todo"
              onChange={handleTodoNameChange}
            />
            <div className="form-check mr-2">
              <input
                checked={status}
                onChange={handleStatusChange}
                type="checkbox"
                className="form-check-input"
                id="TodoCheckbox"
              />
              <label className="form-check-label" htmlFor="TodoCheckbox">
                Completed
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <hr />
      <div className="text-center">
        <h3>Todo List</h3>
        {todos.map((todo, index) => (
          <div key={index}>
            <h4>Name: {todo.name}</h4>
            <h5>Todo: {todo.todoName}</h5>
            <h6>Status: {todo.status ? "Completed" : "Pending"}</h6>
            <button onClick={() => handleEdit(index)} className="btn btn-warning mr-2">
              Edit
            </button>
            <button onClick={() => handleRemove(index)} className="btn btn-danger">
              Remove
            </button>
            <hr />
          </div>
        ))}
      </div>
    </>
  )}
{editingTodoIndex !== null && (
  <div className="container mt-4">
    <h1 className="mb-4">Editing Todo</h1>
    <form>
      <div className="form-group">
        <label htmlFor="Name">Name: </label>
        <input
          className="form-control"
          name="Name"
          value={editingName}
          type="text"
          onChange={handleEditingNameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="TodoName">TodoName: </label>
        <input
          className="form-control"
          name="TodoName"
          value={editingTodoName}
          type="text"
          onChange={handleEditingTodoNameChange}
        />
      </div>
      <div className="form-group form-check">
        <input 
          className="form-check-input"
          checked={editingTodoStatus}
          onChange={handleEditingTodoStatusChange}
          type="checkbox"
          name="TodoCheckbox"
          id="TodoCheckbox"
        />
        <label className="form-check-label" htmlFor="TodoCheckbox">Status</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSaveEdit}>
        Save
      </button>
      <button type="button" className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
        Cancel
      </button>
    </form>
  </div>
)}
</div>

  );
}

export default Todo;
