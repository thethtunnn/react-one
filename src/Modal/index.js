import React from 'react'
import './index.css';
import ReactDom from 'react-dom'

export default function Modal({children,danger,SetShowModal}) {

    let className = danger ? 'border-red': 'border-blue'
    
  return (
    ReactDom.createPortal(
    <div className='modal-component'>
                    <div className='modal-backdrop' >
                        <div className={`modal ${className}`}>
                        {children}
        <button onClick={()=>SetShowModal(false)}>close</button>

                        </div>
                        </div>
                        </div>,document.getElementById('modal')
                         )

                        )
}
