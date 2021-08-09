import React from "react";
import {
  useTodosQuery,
  useAddTodoMutation,
  useDelTodoMutation,
} from "./types.d";

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
  const [delTodo] = useDelTodoMutation({
    update() {
      refetch();
    },
  });

  return (
    <div className="App">
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
          {data &&
            data.todos.map(({ id, name }, i) => (
              <li key={i}>
                {name}
                <button onClick={() => delTodo({ variables: { id } })}>
                  削除
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default App;
