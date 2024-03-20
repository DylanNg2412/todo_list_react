import TodoItem from "./todoitem";

export default function TodoList(props) {
  const { todos, setTodos } = props;

  return (
    <div className="card rounded shadow-sm" style={{ maxWidth: "500px" }}>
      <div className="card-body">
        <h3 class="card-title mb-3">My Todo List</h3>

        {todos.map((todo) => {
          const { text, id, isComplete } = todo;
          return (
            <TodoItem
              key={id}
              id={id}
              text={text}
              isComplete={isComplete}
              isCheck={(id) => {
                const target = todos.find((t) => t.id === id);
                target.isComplete = !target.isComplete;
                setTodos([...todos]);
              }}
              onDelete={(id) => {
                setTodos(todos.filter((t) => t.id !== id));
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
