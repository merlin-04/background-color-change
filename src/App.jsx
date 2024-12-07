
import './App.css'
import React, { useState } from 'react';

function App() {

  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  const buttonStyle = {
    width: '100px',
    height: '50px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'yellow',
    color: 'black',
    borderRadius: '10px',
  };
  return (
    <>
      <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h1 style={{ textAlign: 'center' }}>Change Background Color</h1><br />
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => changeBackgroundColor('red')} style={buttonStyle}>Red</button>
            <button onClick={() => changeBackgroundColor('blue')} style={buttonStyle}>Blue</button>
            <button onClick={() => changeBackgroundColor('green')} style={buttonStyle}>Green</button>
            <button onClick={() => changeBackgroundColor('purple')} style={buttonStyle}>Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
