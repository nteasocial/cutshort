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

        <p className="title">
          Full Name
        </p>
        <div className="button">Steve Jobs</div>


        <p className="title">
          Display Name
        </p>
        <div className="button">Steve</div>


      </div>
    </div>

  )
}
