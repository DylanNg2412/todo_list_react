export default function TodoItem(props) {
  const { text, id, onDelete, isComplete, isCheck } = props;

  return (
    <ul class="list-group">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
          {isComplete ? (
            <>
              <button
                class="btn btn-sm btn-success"
                onClick={() => {
                  isCheck(id);
                }}
              >
                <i class="bi bi-check-square"></i>
              </button>
              <span class="ms-2 text-decoration-line-through">{text}</span>
            </>
          ) : (
            <>
              <button
                class="btn btn-sm btn-light"
                onClick={() => {
                  isCheck(id);
                }}
              >
                <i class="bi bi-square"></i>
              </button>
              <span class="ms-2">{text}</span>
            </>
          )}
        </div>
        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={(event) => {
              onDelete(id);
            }}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </ul>
  );
}
