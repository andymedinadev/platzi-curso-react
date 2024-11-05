import { useState } from 'react'

export function useLocalStorage (itemName, initialValue) {
  const storageItems = JSON.parse(localStorage.getItem(itemName))

  let parsedItems

  if (!storageItems) {
    localStorage.setItem(itemName, initialValue)
    parsedItems = initialValue
  } else {
    parsedItems = storageItems
  }

  const [items, setItems] = useState(parsedItems)

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }

  return [items, saveItems]
}
