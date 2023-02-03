import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
