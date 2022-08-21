import './header.scss';
import React from 'react';
import Logo from './cutshort-logo.png'

export function Header() {
  return (
    <div className="header">
      <span className='child icon'>
        <img className='logo' src={Logo} alt="cutshort" />
      </span>
      <span className="child title">
        Cutshort
      </span>
    </div>
  )
}
