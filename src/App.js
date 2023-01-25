import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './Pages/Books';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Books />
    </Provider>
  );
}

export default App;
