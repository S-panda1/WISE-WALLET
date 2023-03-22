import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';

import Daily from './components/Daily';
import Budget from './components/Budget';
import Stat from './components/Stat';
import Add from './components/Add';
import Profile from './components/Profile';

import Signup from './components/Signup';
import Login from './components/Login';

import NoteState from './context/notes/NoteState';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('#ffffff');

  const toggleMode = () =>{
    if (mode==='#ffffff') {
      setmode('#121212');
      document.body.style.backgroundColor = '#121212';
    }
    else{
      setmode('#ffffff');
      document.body.style.backgroundColor = '#ffffff';
    }
  }


  return (
    <>
    <NoteState>
    <Router>

      <Routes>
      <Route path="/" element={<Daily mode={mode} />} />
      <Route path="/stat" element={<Stat mode={mode} />} />
      <Route path="/add" element={<Add mode={mode} />} />
      <Route path="/budget" element={<Budget mode={mode} />} />
      {/* <Route path="/budget" element={URL("http://127.0.0.1:7860/")} /> */}
      <Route path="/profile" element={<Profile mode={mode} toggleMode={toggleMode} />} />
      <Route path="/signup" element = {<Signup mode={mode} />} />
      <Route path="/login" element = {<Login mode={mode} />} />
      </Routes>

      <Navbar/>
    </Router>
    </NoteState>
    </>
  );
}

export default App;
