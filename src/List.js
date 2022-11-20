function List({ todo, toggleTask, removeTask }) {
    return (
        <ul key={todo.id} className="item-todo">
            <li
                className={todo.selection ? "item-text selection" : "item-text"}
                onClick={() => toggleTask(todo.id)}
            >
                {todo.task}
            </li>
            <div className="item-delete" onClick={() => removeTask(todo.id)}>
                Delete
            </div>
        </ul>
    )
}

export default List;