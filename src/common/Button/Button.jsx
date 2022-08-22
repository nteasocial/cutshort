import React from 'react';


export default function Button({ className, disabled, children, onClick }) {


  return (
    <div className={className} disabled={disabled} onClick={onClick}>{children}</div>
  )
}
