import { useState } from 'react';

const Colorized = () => {
  const [color, setColor] = useState('#6d6d6d');
  const getRandomColor = () => {
    const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return random;
  }
  const changeColor = () => {
    const RandomColor = getRandomColor();
    console.log('Color Change');
    setColor(RandomColor); 
  } 

  return (
    <div className='colorizer'>
      <div className='box' style={{backgroundColor: color}}>{color}</div>
      <button onClick={ changeColor }>Change Color</button>
    </div>
  );
}

export default Colorized