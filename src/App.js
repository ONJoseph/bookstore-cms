import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './Pages/Books';
import Categories from './Pages/Categories';
import NavBar from './components/NavBar';
import './App.css';

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}
