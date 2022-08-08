import "./App.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Fragment, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveTodos();
  });
  
  const loadData = () => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    setTodos(data);
  };

  const saveTodos = () => {
    const data = JSON.stringify(todos);
    localStorage.setItem("data", data);
  };

  const addTodo = (todo) => {
    setTodos([...todos, { done: false, description: todo }]);
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <Header todos={todos} />
      <main>
        <Form todos={todos} addTodo={addTodo} />
        <List todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
