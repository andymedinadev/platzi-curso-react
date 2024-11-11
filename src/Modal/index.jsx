import { createPortal } from 'react-dom'
import './Modal.css'

function ModalContent ({ content }) {
  return (
    <div className='ModalBackground'>
      {content}
    </div>
  )
}

export function Modal ({ children }) {
  const modalRoot = document.getElementById('modal')

  if (!modalRoot) {
    console.error('No se encontró el elemento de destino para el portal')
    return null
  }

  return createPortal(<ModalContent content={children} />, modalRoot)
}
