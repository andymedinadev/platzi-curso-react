import { CreateTodoButton } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodosLoading } from '../TodosLoading'

export function AppUI ({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  strikeTodo,
  deleteTodo,
  loading,
  error
}) {
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
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <p>Hubo un error!</p>}
        {!loading && searchedTodos.length === 0 && <p>¡Crea tu primer TODO!</p>}
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
