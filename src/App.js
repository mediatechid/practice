import './App.css';
import React, { Component } from 'react';  
import Header from './pages/JobsLayout';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import JobsLayout from './pages/JobsLayout';
import Job from './components/Job';
import NewJob from './components/NewJob';

//check 1
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jobs" element={<JobsLayout />} >  
            <Route path=":id" element={<Job />} />
            <Route path="new" element={<NewJob />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
