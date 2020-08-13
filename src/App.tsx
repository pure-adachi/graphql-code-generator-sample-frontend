import { gql, useQuery } from "@apollo/client";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const TODOS_QUERY = gql`
  query {
    todos {
      name
    }
  }
`;

const App = () => {
  const { loading, data } = useQuery(TODOS_QUERY);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
