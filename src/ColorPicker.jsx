import React, { useState } from 'react';
import axios from 'axios';


const LEDController = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [blinkTime, setBlinkTime] = useState(500);

  const apiBaseURL = 'http://192.168.218.76';  // Base URL for your NodeMCU server

  const handleSetColor = () => {
    axios.get(`${apiBaseURL}/setColor?red=${red}&green=${green}&blue=${blue}`)
      .then(() => alert('Color set!'))
      .catch(err => console.log(err));
  };

  const handleBlink = () => {
    axios.get(`${apiBaseURL}/blink?time=${blinkTime}`)
      .then(() => alert('Blinking LED!'))
      .catch(err => console.log(err));
  };

  const handlePattern = () => {
    axios.get(`${apiBaseURL}/pattern`)
      .then(() => alert('Running pattern!'))
      .catch(err => console.log(err));
  };

  const handleDim = () => {
    axios.get(`${apiBaseURL}/dim`)
      .then(() => alert('Dimming LED!'))
      .catch(err => console.log(err));
  };

  const handleSimpleBlink = () => {
    axios.get(`${apiBaseURL}/simpleBlinkPattern`)
      .then(() => alert('Simple Blinking Pattern!'))
      .catch(err => console.log(err));
  };

  const handleChasingEffect = () => {
    axios.get(`${apiBaseURL}/chasingEffect`)
      .then(() => alert('Chasing Effect!'))
      .catch(err => console.log(err));
  };

  const handleAlternatingFlash = () => {
    axios.get(`${apiBaseURL}/alternatingFlash`)
      .then(() => alert('Alternating Flash!'))
      .catch(err => console.log(err));
  };

  const handleFadingEffect = () => {
    axios.get(`${apiBaseURL}/fadingEffect`)
      .then(() => alert('Fading Effect!'))
      .catch(err => console.log(err));
  };

  return (
    <div className="controller-container">
      <h1 className="controller-title">RGB LED Controller</h1>
      
      <div className="color-controls">
        <label>Red:</label>
        <input type="range" min="0" max="255" value={red} onChange={(e) => setRed(e.target.value)} />
        <label>Green:</label>
        <input type="range" min="0" max="255" value={green} onChange={(e) => setGreen(e.target.value)} />
        <label>Blue:</label>
        <input type="range" min="0" max="255" value={blue} onChange={(e) => setBlue(e.target.value)} />
        <button className="control-button" onClick={handleSetColor}>Set Color</button>
      </div>

      <div className="blink-controls">
        <label>Blink Time (ms):</label>
        <input type="number" value={blinkTime} onChange={(e) => setBlinkTime(e.target.value)} />
        <button className="control-button" onClick={handleBlink}>Blink LED</button>
      </div>

      <div className="pattern-controls">
        <button className="control-button" onClick={handlePattern}>Run Pattern</button>
        <button className="control-button" onClick={handleDim}>Dim LED</button>
      </div>

      <div className="new-pattern-controls">
        <button className="control-button" onClick={handleSimpleBlink}>Simple Blink Pattern</button>
        <button className="control-button" onClick={handleChasingEffect}>Chasing Effect</button>
        <button className="control-button" onClick={handleAlternatingFlash}>Alternating Flash</button>
        <button className="control-button" onClick={handleFadingEffect}>Fading Effect</button>
      </div>
    </div>
  );
};

export default LEDController;
