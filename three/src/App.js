import './App.css';
import React from 'react';
import ThreeFiberScene from './Three';
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Three.js Tutorial</h1>
      </header>
      <main>
        <ThreeFiberScene />
      </main>
    </div>
  );
}

export default App;
