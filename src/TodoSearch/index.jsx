import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

export function TodoSearch () {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  return (
    <input
      className='TodoSearch'
      placeholder='Cortar cebolla'
      value={searchValue}
      onChange={event => setSearchValue(event.target.value)}
    />
  )
}
