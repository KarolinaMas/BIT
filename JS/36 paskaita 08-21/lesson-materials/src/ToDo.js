import { useState } from "react";

function ToDo() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  return (
    <div>
      <h1>ToDo list</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setList([...list, { value, done: false }]);
        }}
      >
        <input
          type="text"
          placeholder="Enter todo"
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add todo</button>
      </form>
      <p>
        {list.map((data, index) => (
          <li key={index}>
            <span
              onClick={(e) => {
                list[index].done = true;
                setList([...list]);
              }}
              style={{ textDecoration: data.done ? "line-through" : "none" }}
            >
              {data.value}
            </span>
            <button
              onClick={(e) => {
                list.splice(index, 1);
                setList([...list]);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </p>
    </div>
  );
}

export default ToDo;
