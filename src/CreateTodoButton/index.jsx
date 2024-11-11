import './CreateTodoButton.css'

export function CreateTodoButton ({ setOpenModal }) {
  return (
    <button
      className='CreateTodoButton'
      onClick={() => setOpenModal(state => !state)}
    >
      +
    </button>
  )
}
