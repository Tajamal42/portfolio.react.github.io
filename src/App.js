//import logo from './logo.svg';
//import './App.css';
//import functionalComp from './Components/FunctionalComp';
import {React , ReactDOM} from 'react';
import { Footer } from './Components/Footer';
import Home from './routes/Home';
import About from './routes/About';
import Project from './routes/Project';
import Contact from './routes/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
