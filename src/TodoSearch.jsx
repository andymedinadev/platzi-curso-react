import { useState } from 'react'
import './TodoSearch.css'

export function TodoSearch () {
  const [searchValue, setSearchValue] = useState('')

  return (
    <input
      className='TodoSearch'
      placeholder='Cortar cebolla'
      value={searchValue}
      onChange={event => setSearchValue(event.target.value)}
    />
  )
}
