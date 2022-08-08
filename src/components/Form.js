import React from "react";
import { useState } from "react";

export default function Form({ todos, addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        type="text"
        placeholder="Ajouter une tâche"
        required
      />
      <button>Ajouter</button>
    </form>
  );
}
