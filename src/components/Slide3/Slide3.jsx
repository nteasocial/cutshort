import React from "react";
import './slide3.scss'
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';

export function Slide3() {
  return (
    <>
      <div className="bodywrap">
        <div className="slide3">
          <div className="wrapper">
            <div className="main-text">
              How you are planning to use Eden?
            </div>
            <div className="sub-text">
              We will streamline your setup experience accordingly.
            </div>
          </div>
        </div>

        <div className="cards-list">
          <div className="wrap active">
            <div className="card-item active">
              <PersonIcon className='icon' />
              <p className='title'>For Myself</p>
              <span className='sub-text'>Write Better. Think more clearly. Stay organised</span>
            </div>
          </div>

          <div className="wrap">
            <div className="card-item">
              <GroupsIcon className='icon' />
              <p className='title'>With my team</p>
              <span className='sub-text'>Wikis, docs, tasks & projects, all in one place</span>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

