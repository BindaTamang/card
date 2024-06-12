// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemList from './Components/ItemList';
import ItemDetails from './Components/ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>List of Items</h1>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/detail/:id" element={<ItemDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
