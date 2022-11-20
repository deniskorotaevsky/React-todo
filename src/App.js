import { useState } from 'react'
import List from './List'
import FormInput from './FormInput'

function App() {
  const [items, setItems] = useState([])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(11),
        task: userInput,
        selection: false
      }
      setItems([...items, newItem])
    }
  }

  const removeTask = (id) => {
    const newArr = [...items.filter((todo) => todo.id !== id)]
    setItems(newArr);
  }

  const handleToggle = (id) => {
    const newSelection = [
      ...items.map((todo) =>
        todo.id === id ? { ...todo, selection: !todo.selection } : { ...todo }
      )
    ]
    setItems(newSelection)
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
          />
        )
      })}
    </div>
  );
}

export default App;
