import React from 'react';
import './slide.scss';

export function Slide1() {
  return (
    <div className="slide1">
      <div className="wrapper">
        <div className="main-text">
          Welcome! First things first...
        </div>
        <div className="sub-text">
          You can always change them later.
        </div>
        
        <label for="fname" className='title'>Full Name</label>
        <div>
          <input type="text" id="fname" className=' foc buttons' placeholder='Steve Jobs' />
        </div>

        <label for="fname" className='title'> Display Name </label>
        <div>
          <input type="text" id="fname" className=' foc buttons' placeholder='Steve' />
        </div>

      </div>
    </div>

  )
}
