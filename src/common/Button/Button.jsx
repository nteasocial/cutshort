import React from 'react';


export default function Button({ className, disabled, children, onclick }) {


  return (
    <div className={className} disabled={disabled} onClick={onclick}>{children}</div>
  )
}
