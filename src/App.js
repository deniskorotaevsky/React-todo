import { useEffect, useState } from 'react'
import List from './List'
import FormInput from './FormInput'

function App() {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || [])

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  const addTask = (userInput) => {
    if (userInput.trim().length !== 0) {
      const newItem = {
        id: Math.random().toString(11),
        task: userInput,
        selection: true
      }
      setItems([...items, newItem])
    }
  }

  const removeTask = (id) => {
    setItems([...items.filter((todo) => todo.id !== id)]);
  }

  const handleToggle = (id) => {
    setItems([
      ...items.map((todo) =>
        todo.id === id ? { ...todo, selection: !todo.selection } : { ...todo }
      )
    ])
  }

  const editTask = (id, task) => {
    setEdit(id)
    setValue(task)
  }

  const saveTodo = (id) => {
    let newTodo = [...items].map((item) => {
      if (item.id == id) {
        item.task = value
      }
      return item
    })
    setItems(newTodo)
    setEdit(null)
  }

  return (
    <div className="App">
      <h1>Список задач</h1>
      <FormInput addTask={addTask} />
      {items.map((todo) => {
        return (
          <List
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            editTask={editTask}
            edit={edit}
            value={value}
            setValue={setValue}
            saveTodo={saveTodo}
          />
        )
      })}
    </div>
  );
}

export default App;