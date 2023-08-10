import './App.css';
import React from 'react';
import {Albums} from "./pages/Albums";
import {Update} from "./pages/Update";
import {Add} from "./pages/Add";
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [albums, setAlbums] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Albums albums={albums} setAlbums={setAlbums}/>}/>
          <Route path="/add" element={<Add albums={albums}/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
