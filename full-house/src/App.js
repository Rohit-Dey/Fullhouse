import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Room1 from './components/Room1'
import Room2 from './components/Room2'
import Room3 from './components/Room3'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/room1" element={<Room1/>} />
          <Route path="/room2" element={<Room2/>} />
          <Route path="/room3" element={<Room3/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
