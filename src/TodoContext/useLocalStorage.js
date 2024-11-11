import { useEffect, useState } from 'react'

export function useLocalStorage (itemName, initialValue) {
  const [items, setItems] = useState(JSON.parse(initialValue))
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const storageItems = JSON.parse(localStorage.getItem(itemName))

        let parsedItems

        if (!storageItems) {
          localStorage.setItem(itemName, initialValue)
          parsedItems = initialValue
        } else {
          parsedItems = storageItems
          setItems(parsedItems)
        }

        setLoading(false)
      } catch (err) {
        setLoading(false)
        console.log(err)
        setError(true)
      }
    }, 2000)
  }, [])

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItems(newItems)
  }

  return { items, saveItems, loading, error }
}
