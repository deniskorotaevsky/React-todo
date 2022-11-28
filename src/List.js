import remove from './remove.png';
import pencil from './pencil.png';
import checkMark from './checkMark.png';

function List({ todo, toggleTask, removeTask, editTask, edit, value, setValue, saveTodo }) {
    return (
        <ul key={todo.id} className={edit == todo.id ? "item-todo todo-ac " : "item-todo"}>

            {
                edit == todo.id ? <div>
                    <input className="inputEdit" value={value} onChange={(e) => setValue(e.target.value)} />
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
                        <button className='btnChack' onClick={() => saveTodo(todo.id)}> <img src={checkMark} alt='checkMark' /></button>
                    </div> :
                    <div className="btnDeleteEdit">
                        <div className="item-edit" onClick={() => editTask(todo.id, todo.task)}>
                            <img src={pencil} alt='pencil' />
                        </div>
                        <div className="item-delete" onClick={() => removeTask(todo.id)}>
                            <img src={remove} alt='remove' />
                        </div>
                    </div>
            }

        </ul>
    )
}

export default List;