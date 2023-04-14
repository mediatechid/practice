import './App.css';
import ExpenseItem from './components/ExpenseItem';
import ExpenseItemInline from './components/ExpenseItemInline';
import styles from "./components/Button.module.css";
import ChitChat from './components/ChitChat';
import Car3 from './components/Car3';
import React, { Component } from 'react';  
import { ParentComponent } from './components/ParentComponent';
import Motorbike from './components/Motorbike';
import Motorbike2 from './components/Motorbike2';
import MyMessage from './components/MyMessage';
import RenderCounter from './components/RenderCounter';
import Header from './pages/header';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';


function Car(props) {
  return <h2>Mobil saya merk : { props.brand.name } type : { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Honda", model: "CRV" };
  return (
    <>
	    <h1>Mobil kamu apa ?</h1>
	    <Car brand={ carInfo } />
    </>
  );
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} > 
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Mybutton = () => {
  return (
    <button className={styles.error_btn}>My Error Button</button>
  )
}

export default App;
