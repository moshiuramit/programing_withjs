import React from 'react';
import './square.css';

let Square = ({value, onSquareClick}) => {
  return (
      <button className="square" onClick={onSquareClick}>{value}</button>
  )
};

export default Square