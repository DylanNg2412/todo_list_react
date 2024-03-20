import { useState } from "react";

export default function TodoForm(props) {
  const { todos, setTodos } = props;
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className="mt-4">
      <form
        className="d-flex justify-content-between align-items-center"
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([
            ...todos,
            {
              id: Math.random(),
              text: value,
              isComplete:false
            },
          ]);
          setValue("");
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Add new item..."
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          required
        />
        <button className="btn btn-primary btn-sm rounded ms-2">Add</button>
      </form>
    </div>
  );
}
