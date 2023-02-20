import { useState } from "react";

function App() {

  function TodoItem({ title, description, onEdit, onDelete }) {
    const [editMode, setEditMode] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
  
    const handleTitleChange = (event) => {
      setNewTitle(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setNewDescription(event.target.value);
    };
  
    const handleEditClick = () => {
      setEditMode(true);
    };
  
    const handleCancelClick = () => {
      setNewTitle(title);
      setNewDescription(description);
      setEditMode(false);
    };
  
    const handleSaveClick = () => {
      onEdit(newTitle, newDescription);
      setEditMode(false);
    };
  
    return (
      <div>
        {editMode ? (
          <>
            <input type="text" value={newTitle} onChange={handleTitleChange} />
            <textarea
              value={newDescription}
              onChange={handleDescriptionChange}
            />
            <button onClick={handleSaveClick}>Save</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={onDelete}>Delete</button>
          </>
        )}
      </div>
    );
  }
  
  function TodoList() {
    const [todos, setTodos] = useState([]);
  
    const handleAddTodo = (title, description) => {
      const newTodo = { title, description };
      setTodos([...todos, newTodo]);
    };
  
    const handleEditTodo = (index, title, description) => {
      const newTodos = [...todos];
      newTodos[index] = { title, description };
      setTodos(newTodos);
    };
  
    const handleDeleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <TodoItem
              title={todo.title}
              description={todo.description}
              onEdit={(newTitle, newDescription) =>
                handleEditTodo(index, newTitle, newDescription)
              }
              onDelete={() => handleDeleteTodo(index)}
            />
          </div>
        ))}
        <button onClick={() => handleAddTodo('', '')}>Add Todo</button>
      </div>
    );
  }
  TodoList();
}

export default App;
