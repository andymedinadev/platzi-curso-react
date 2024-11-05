import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
import { AppUI } from './AppUI'

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
    <AppUI
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      strikeTodo={strikeTodo}
      deleteTodo={deleteTodo}
    />
  )
}

export default App
