import { useState } from 'react'
import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

function App () {
  const storageTodos = JSON.parse(localStorage.getItem('TODOS_V1'))

  let parsedTodos

  if (!storageTodos) {
    localStorage.setItem('TODOS_V1', '[]')
    parsedTodos = []
  } else {
    parsedTodos = storageTodos
  }

  const [todos, setTodos] = useState(parsedTodos)
  const [searchValue, setSearchValue] = useState('')

  const totalTodos = todos.length

  const completedTodos = todos.filter(todo => todo.completed).length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText)
  })

  const persistTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos)
  }

  const strikeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    persistTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    newTodos.splice(todoIndex, 1)
    persistTodos(newTodos)
  }

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
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => strikeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  )
}

export default App
