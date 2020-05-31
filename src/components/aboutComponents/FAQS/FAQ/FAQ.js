import React from 'react';
import './FAQ.scss';
const FAQ = ({item, index, clicked}) => {
  const {open, heading, iconOne, iconTwo, content} = item;
  return (
    <ul className = 'FAQ mb-3'>
      <button 
        onClick = {() => clicked(index)} 
        className = 'question d-flex align-items-center justify-content-between'>
          <h3>{heading}</h3>
          <span>
            {!open? iconOne : iconTwo}
          </span>
      </button>
      {open? 
        <div className = 'answer'>
          {content}
        </div>
        : null}
    </ul>
  );
}
export default FAQ;