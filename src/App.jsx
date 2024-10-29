import { CreateTodoButton } from './CreateTodoButton'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'
import './App.css'

function App () {
  return (
    <div>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  )
}

export default App
