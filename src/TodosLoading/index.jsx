import './TodosLoading.css'

export function TodosLoading () {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon' />
      <p className='LoadingTodo-text' />
      <span className='LoadingTodo-deleteIcon' />
    </div>
  )
}
