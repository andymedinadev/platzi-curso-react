import { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

export function TodoForm () {
  const { setOpenModal, addTodo } = useContext(TodoContext)
  const [newTodoValue, setNewTodoValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }
  const onCancel = () => {
    setOpenModal(false)
  }

  const onType = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form
      onSubmit={onSubmit}
    >
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onType}
        required
        placeholder='Hacer una pausa para meditar'
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          onClick={onCancel}
          className='TodoForm-button TodoForm-button--cancel'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='TodoForm-button TodoForm-button--add'
        >
          Añadir
        </button>
      </div>
    </form>
  )
}
