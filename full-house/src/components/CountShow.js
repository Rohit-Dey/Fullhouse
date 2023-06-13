import React from 'react';
import './CountShow.css';

const CountShow = ({ count }) => {
  return (
    <>
    <h2>Live People Count</h2>
    <div className='count-container'>
      {count}
    </div>
    </>
  );
};

export default CountShow;
