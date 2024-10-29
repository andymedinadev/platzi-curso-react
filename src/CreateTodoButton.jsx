import './CreateTodoButton.css'

export function CreateTodoButton () {
  return (
    <button
      className='CreateTodoButton'
      onClick={event => {
        console.log('Clicked!')
        console.log(event.target)
      }}
    >
      +
    </button>
  )
}
