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
    <div>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <div>
          <h1>No todos available</h1>
          <h1>Add todo: </h1>
            <form onSubmit={handleTodo}>
            <input
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={handleNameChange}
            />
            <input
              value={todoName}
              type="text"
              placeholder="Enter Todo"
              onChange={handleTodoNameChange}
            />
            <hr />
            <label htmlFor="TodoCheckbox">Status</label>
            <input
              checked={status}
              onChange={handleStatusChange}
              type="checkbox"
              name="TodoCheckbox"
            />
            <hr />
            <button type="submit">Add Todo</button>
          </form>
        
        </div>
      ) : (
        <>
          <h1>Total Todos: {todos.length}</h1>
          <form onSubmit={handleTodo}>
            <input
              value={name}
              type="text"
              placeholder="Enter Name"
              onChange={handleNameChange}
            />
            <input
              value={todoName}
              type="text"
              placeholder="Enter Todo"
              onChange={handleTodoNameChange}
            />
            <hr />
            <label htmlFor="TodoCheckbox">Status</label>
            <input
              checked={status}
              onChange={handleStatusChange}
              type="checkbox"
              name="TodoCheckbox"
            />
            <hr />
            <button type="submit">Add Todo</button>
          </form>
          <hr />
          <h1>Todo List</h1>
          {todos.map((todo, index) => (
            <div key={index}>
              <h1>Name: {todo.name}</h1>
              <h2>TodoName: {todo.todoName}</h2>
              <h3>Status: {todo.status ? "Completed" : "Pending"}</h3>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleRemove(index)}>Remove</button>
              <hr />
            </div>
          ))}
        </>
      )}
      {editingTodoIndex !== null && (
        <div>
          <h1>Editing Todo</h1>
          <form>
            <label htmlFor="Name">Name: </label>
            <input
              name="Name"
              value={editingName}
              type="text"
              onChange={handleEditingNameChange}
            />
            <hr />

            <label htmlFor="TodoName">TodoName: </label>
            <input
              name="Name"
              value={editingTodoName}
              type="text"
              onChange={handleEditingTodoNameChange}
            />
            <hr />

            <label htmlFor="TodoCheckbox">Status</label>
            <input 
              checked={editingTodoStatus}
              onChange={handleEditingTodoStatusChange}
              type="checkbox"
              name="TodoCheckbox"
            />
            <hr />
            <button type="button" onClick={handleSaveEdit}>
              Save
            </button>
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Todo;
