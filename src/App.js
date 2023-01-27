import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Categories from './components/categories/Categories';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import BookDetails from './components/bookDetails/BookDetails';
import Contacts from './pages/contacts/Contacts';

const App = () => (
  <>
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<BookDetails />} />
      </Routes>
    </div>
  </>
);

export default App;
