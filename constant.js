localStorage.removeItem('TODOS_V1')

const defaultTodos = [
  { text: 'Planificar el viaje', completed: false },
  { text: 'Actualizar el currículum', completed: true },
  { text: 'Hacer una presentación', completed: false },
  { text: 'Visitar a los abuelos', completed: true },
  { text: 'Practicar un nuevo idioma', completed: false }
]

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
