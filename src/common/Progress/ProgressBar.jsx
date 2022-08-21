import React, { useState, useEffect } from 'react'
import Button from '../Button/Button';
import Circle from '../Circle'
import './progressbar.css';
import { useNavigate } from 'react-router-dom';
import { Slide1 } from '../../components/Slide1/Slide1';
import { Slide2 } from '../../components/Slide2/Slide2'


function ProgressBar() {

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [circle] = useState(5);
  const [active, setActive] = useState(1);
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setWidth(100 / (circle - 1) * active)
  }, [circle, active])

  const handleClick = () => {
    setActive(active + 1);
    setCount(count + 1);
    if (count === 0) {
      <Slide2 />
      navigate('/2')
    }
    else if (count === 1) {
      navigate('/3');
    } else if (count === 2) {
      navigate('/4')
    }
    else {
      navigate('')
    }
  }

  const arr = [];
  for (let i = 1; i < circle; i++) {
    arr.push(<Circle className={i <= active ? "circle active" : "circle"} key={i}>{i}</Circle>);
  }


  return (
    <div className='Wrapper'>
      <div className="content">
        <div className="progressbar">
          <div className="progress" style={{
            width: width
              + "%"
          }}></div>
          {arr}
        </div>

        <Slide1 />

        <div className="button">
          <Button className={"btn"} children={"Create Workspace"} disabled={active >= circle - 1 ? true : false} onClick={handleClick}></Button>
        </div>
      </div>
    </div >
  )
}

export default ProgressBar;