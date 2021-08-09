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
    <div className="h-screen flex items-center justify-center lg:p-36 md:p-28 sm:p-20 p-4">
      <div className="bg-gray-50 rounded-lg p-8 shadow-2xl w-full">
        <p className="text-3xl text-red-800">Todo List</p>
        <div className="my-4 sm:flex">
          <input
            className="border shadow rounded py-2 px-3 w-full sm:mb-0 mb-3"
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                addTodo({ variables: { name: e.currentTarget.value } });
                e.currentTarget.value = "";
              }
            }}
          />
          <button
            className="sm:ml-3 border-2 p-2 whitespace-nowrap rounded text-blue-400 border-blue-400 hover:text-white hover:bg-blue-400 sm:w-auto w-full"
            onClick={(e) => {
              const divElement = e.currentTarget.parentNode;
              if (divElement) {
                const inputElm = divElement.firstChild as HTMLInputElement;
                addTodo({ variables: { name: inputElm.value } });
                inputElm.value = "";
              }
            }}
          >
            登録
          </button>
        </div>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <ul>
            {data &&
              data.todos.map(({ id, name }, i) => (
                <li
                  key={i}
                  className="flex py-2 hover:bg-gray-200 rounded items-center"
                >
                  <span className="flex-auto px-1 truncate">{name}</span>
                  <button
                    className="border-2 p-2 whitespace-nowrap rounded text-red-400 border-red-400 hover:text-white hover:bg-red-400"
                    onClick={() => delTodo({ variables: { id } })}
                  >
                    削除
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
