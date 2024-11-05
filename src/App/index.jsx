import { useState } from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { useLocalStorage } from './useLocalStorage'

function App () {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', '[]')
  const [searchValue, setSearchValue] = useState('')

  const totalTodos = todos.length

  const completedTodos = todos.filter(todo => todo.completed).length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText)
  })

  const strikeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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
