import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'
import { TodosLoading } from '../TodosLoading'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'

export function AppUI () {
  const { loading, error, searchedTodos, strikeTodo, deleteTodo, openModal, setOpenModal } = useContext(TodoContext)

  return (
    <>
      <TodoCounter />

      <TodoSearch />

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

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  )
}
