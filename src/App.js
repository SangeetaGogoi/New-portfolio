import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import Projects from './Components/Projects/Projects';
import HomePage from './Components/HomePage/HomePage';
import Contact from './Components/Contact/Contact';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<HomePage />}
          />

          <Route
            path='/home'
            element={<HomePage />}
          />
          <Route
            path='/projects'
            element={<Projects />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
        </Routes>
      </Router>
    </div>
  );
}
