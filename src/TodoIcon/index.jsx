import './TodoIcon.css'

const CheckSVG = (props) => (
  <svg xmlSpace='preserve' viewBox='0 0 405.272 405.272' {...props}>
    <path d='M393.401 124.425 179.603 338.208c-15.832 15.835-41.514 15.835-57.361 0L11.878 227.836c-15.838-15.835-15.838-41.52 0-57.358 15.841-15.841 41.521-15.841 57.355-.006l81.698 81.699L336.037 67.064c15.841-15.841 41.523-15.829 57.358 0 15.835 15.838 15.835 41.514.006 57.361z' />
  </svg>
)
const DeleteSVG = (props) => (
  <svg xmlSpace='preserve' viewBox='0 0 348.333 348.334' {...props}>
    <path d='M336.559 68.611 231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z' />
  </svg>
)

const iconTypes = {
  check: (color) => <CheckSVG className='Icon-svg' fill={color} />,
  delete: (color) => <DeleteSVG className='Icon-svg' fill={color} />
}

export function TodoIcon ({ type, color, onClick }) {
  return (
    <span
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  )
}
