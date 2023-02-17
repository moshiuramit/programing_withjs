import { useState } from 'react';

export default function UseHook() { 
  const [inputText, setText] = useState('hello'); //the inputText here is local state and is local to the InputComponent. This means that outside of this component, inputText is unavailable and unknown. 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return ( 
    <> 
      <input value={inputText} onChange={handleChange} /> 
      <p>You typed: {inputText}</p> 
      <button onClick={() => setText('hello')}> 
        Reset 
      </button> 
    </> 
  ); 
} 