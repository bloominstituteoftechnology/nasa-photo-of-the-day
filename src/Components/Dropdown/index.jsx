import React, { useState } from 'react';
import './index.css';

const Dropdown = (props) => {

  const { date, setDate, list, current } = props;

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className="Dropdown">
      <div
        tabIndex={0}
        role='button'
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>
          <p>{date}</p>
        </div>
      </div>
      { open &&
        (
          <ul>
            {
              list.map((day) => (
                <li>
                  <button type='button' onClick={() => setDate(`${current.year}-${current.month}-${day}`)}>
                    <span>{`${current.year}-${current.month}-${day}`}</span>
                  </button>
                </li>
              ))
            }
          </ul>
        )
      }
    </div>
  );

};

export default Dropdown;
