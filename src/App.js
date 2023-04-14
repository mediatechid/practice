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
import MyRoutes from './routes/MyRoutes';
import { AuthProvider } from './context/AuthProvider';

//check 1
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MyRoutes/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
