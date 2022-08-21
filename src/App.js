import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Slide1 } from './components/Slide1/Slide1';
import { Slide2 } from './components/Slide2/Slide2';
import { Slide3 } from './components/Slide3/Slide3';
import { Slide4 } from './components/Slide4/Slide4';
import { Header } from './common/Header/Header'
import ProgressBar from './common/Progress/ProgressBar';
import Button from './common/Button/Button';


function App() {
  return (
    <div className="App">
      <div className="card">
        <Header />
        <ProgressBar />
        <Routes>
          <Route path="/" element={<Slide1 />} />
          <Route path="/2" element={<Slide2 />} />
          <Route path="/3" element={<Slide3 />} />
          <Route path="/4" element={<Slide4 />} />
        </Routes >
        <Button />
      </div>
    </div>
  );
}

export default App;
