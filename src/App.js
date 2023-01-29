import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Categories from './components/categories/Categories';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import BookDetails from './components/bookDetails/BookDetails';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/store" exact element={<Store />}>
          <Route path="/store/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
