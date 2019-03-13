import React from 'react'

/* 
  this modal will appear when a user begins inputting their password.
  as the user starts to reach the requirements, the errors will resolve
  until the user has met all requirements
*/
const Modal = props => (
  <ul className='modal'>
    {props.errors.map(message => {
      return <li key={message}>{message}</li>
    })}
  </ul>
)

export default Modal