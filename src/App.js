import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Categories from './components/categories/Categories';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import BookDetails from './components/bookDetails/BookDetails';
import Contacts from './pages/contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/categories" component={Categories} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/store" exact component={Store}>
            <Route path="/store/:id" component={BookDetails} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
