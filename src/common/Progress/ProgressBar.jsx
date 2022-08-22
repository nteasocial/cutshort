import React, { useState, useEffect } from 'react'
import Button from '../Button/Button';
import Circle from '../Circle'
import './progressbar.css';
import { useNavigate } from 'react-router-dom';


function ProgressBar() {

  const navigate = useNavigate();
  const [width, setWidth] = useState(0);

  const [circle] = useState(5);
  const [active, setActive] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setWidth(100 / (circle - 2) * 3)
  }, [circle, active])

  const handleClick = () => {
    setActive(active + 1);
    setCount(count + 1);
    count === 0 ? navigate('/2') : count === 1 ? navigate('/3') : count === 2 ? navigate('/4') : navigate('')
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
            width: width + '%'
          }} ></div>
          {arr}
        </div>
      </div>
      <div className="button" style={{}}>
        <Button className={"btn"} children={'Create Workspace' && count === 3 ? 'Launch Eden' : 'Create Workspace'} disabled={active === 2 ? true : false} onClick={handleClick} />
      </div>
    </div >
  )
}

export default ProgressBar;