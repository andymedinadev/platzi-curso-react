import { useState } from 'react'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Curso React.js', completed: false },
  { text: 'Texto prueba', completed: false }
]

function App () {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const totalTodos = todos.length
  const completedTodos = todos.filter(todo => todo.completed).length

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
