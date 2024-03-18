import TodoItem from "./todoitem";

import TodoForm from "./todoform";

export default function TodoList() {
  const todos = [
    {
      id: 1,
      text: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Task 3",
      isCompleted: false,
    },
  ];

  return (
    <div className="card rounded shadow-sm" style={{ maxWidth: "500px" }}>
      <div className="card-body">
      <h3 class="card-title mb-3">My Todo List</h3>
        {todos.map((todo) => {
          const { text } = todo;
          return <TodoItem  text={text} />;
        })}
        <TodoForm />
      </div>
    </div>
  );
}
