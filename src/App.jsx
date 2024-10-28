import './App.css'

function App () {
  return (
    <>
      <h1>Hello World!</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </>
  )
}

function TodoItem () {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Llorona</p>
      <span>X</span>
    </li>
  )
}

export default App
