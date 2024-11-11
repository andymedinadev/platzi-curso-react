import { useState, createContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

export const TodoContext = createContext()

export function TodoProvider ({ children }) {
  const { items: todos, saveItems: saveTodos, loading, error } = useLocalStorage('TODOS_V1', '[]')
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)

  const totalTodos = todos.length

  const completedTodos = todos.filter(todo => todo.completed).length

  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLocaleLowerCase()
    const searchText = searchValue.toLocaleLowerCase()
    return todoText.includes(searchText)
  })

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos)
  }

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
    <TodoContext.Provider value={{
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      addTodo,
      strikeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}
