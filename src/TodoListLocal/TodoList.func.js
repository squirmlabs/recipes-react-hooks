import React, { useState, useEffect } from 'react';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import About from './About';
import { Container, List } from './Styled';

export default function TodoList() {
  const [newTodo, updateNewTodo] = useState('');

  // Start reading from `localStorage` using the `todos` key
  // and passing the JSON into our variable `initialTodos`

  // LocalStorage function call
  // If it is null, we start with an empty array
  const initialTodos = () =>
    JSON.parse(window.localStorage.getItem('todos') || '[]');

  // Instead of hard-coding to an empty array, we'll replace with our `initialTodos`.
  const [todos, updateTodos] = useState(initialTodos);

  // Write a serialized version of our `todos` to `localStorage`.
  // Pass todos as second argument so we don't write to localStorage after every render.
  // We only run if the todos array changed.
  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Run after every render so that we have the complete todos amount in the title.
  useEffect(() => {
    const inCompleteTodos = todos.reduce(
      (memo, todo) => (!todo.completed ? memo + 1 : memo),
      0
    );
    document.title = inCompleteTodos ? `Todos (${inCompleteTodos})` : 'Todos';
  });

  let [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleKey = ({ key }) => {
      setShowAbout(show =>
        key === '?' ? true : key === 'Escape' ? false : show
      );
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleNewSubmit = e => {
    e.preventDefault();
    updateTodos(prevTodos => [
      ...prevTodos,
      {
        id: Date.now(),
        text: newTodo,
        completed: false
      }
    ]);
    updateNewTodo('');
  };

  const handleNewChange = e => updateNewTodo(e.target.value);

  const handleDelete = (id, e) => {
    updateTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const handleCompletedToggle = (id, e) => {
    updateTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Container todos={todos}>
      <NewTodo
        onSubmit={handleNewSubmit}
        value={newTodo}
        onChange={handleNewChange}
      />
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={handleCompletedToggle}
              onDelete={handleDelete}
            />
          ))}
        </List>
      )}
      <About isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </Container>
  );
}
