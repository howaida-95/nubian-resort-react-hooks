import React from 'react';
const Title = ({title}) => {
  return (
    <div className = 'row justify-content-center'> 
      <div className = 'col'>
        <h2 className = 'title'>{title}</h2>
      </div>
    </div>
  );
}

export default Title;