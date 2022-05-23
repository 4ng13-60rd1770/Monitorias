import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/AppRouter';
import '../src/styles/styles.css'
import { store } from './redux/store/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>
  </Provider>
);
