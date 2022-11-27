function List({ todo, toggleTask, removeTask, editTask, edit, value, setValue, saveTodo }) {
    return (
        <ul key={todo.id} className="item-todo">

            {
                edit == todo.id ? <div>
                    <input value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                    :
                    <div>
                        <li
                            className={todo.selection ? "item-text selection" : "item-text"}
                            onClick={() => toggleTask(todo.id)}
                        >
                            {todo.task}
                        </li>
                    </div>
            }

            {
                edit == todo.id ?
                    <div>
                        <button onClick={() => saveTodo(todo.id)}>Сохранить</button>
                    </div> :
                    <div>
                        <div className="item-delete" onClick={() => removeTask(todo.id)}>
                            Delete
                        </div>
                        <div className="item-edit" onClick={() => editTask(todo.id, todo.task)}>
                            Редактировать
                        </div>
                    </div>
            }

        </ul>
    )
}

export default List;