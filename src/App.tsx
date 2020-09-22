import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useTodosQuery, useAddTodoMutation } from "./types.d";

const App = () => {
  const { loading, data, refetch } = useTodosQuery();
  const [addTodo] = useAddTodoMutation({
    update(_cache, { data }) {
      const result = data?.addTodo?.result || false;
      const errors = data?.addTodo?.todo.errors || [];

      if (result) {
        refetch();
      } else {
        errors.forEach((e) => {
          if (e) alert(`${e.field} ${e.error}`);
        });
      }
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <input
          type="text"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addTodo({ variables: { name: e.currentTarget.value } });
              e.currentTarget.value = "";
            }
          }}
        />
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {data && data.todos.map(({ name }, i) => <li key={i}>{name}</li>)}
          </ul>
        )}
      </header>
    </div>
  );
};

export default App;
