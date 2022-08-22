import './slide2.scss';
import React from 'react';

export function Slide2() {
  return (
    <div className="slide2">
      <div className="wrapper">
        <div className="main-text">
          Let's set-up home for all your work
        </div>
        <div className="sub-text">
          You can always create another workspace later.
        </div>

        <div className="part">
        <label for="fname" className='title'>Workspace Name</label>
        <div>
        <input type="text" id="fname" className='foc button2' placeholder='Eden' />
        </div>

        <label for="fname" className='title'>Workspace Url <span className='optional'>(optional)</span></label>
        <div>
          <span className='eden'>www.eden.com/</span>
          <input type="text" id="fname" className='foc button3' placeholder='Example' />
          </div>
        </div>


      </div>
    </div>

  )
}

