import React from 'react';
import './slide4.scss'
import VerifiedIcon from '@mui/icons-material/Verified';

export function Slide4({ text }) {
  return (
    <div className="slide4">
      <div className="wrapper">

        <VerifiedIcon className='icon' />

        <div className="main-text">
          Congratulations, Eren!
          <div className="sub-text">
            You have completed onboarding, you can start using Eden!.
          </div>
        </div>

      </div>
    </div>
  )
}
