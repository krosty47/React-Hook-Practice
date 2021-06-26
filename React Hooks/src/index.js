import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UseState from './useState/useState';
import UseEffect from './useEffect/useEffect'
// import ItemCount from './desafio/itemCount';
// import DesafioChris from './desafio/desafioChris';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <DesafioChris/> */}
    {/* <ItemCount/> */}

    <UseEffect />
    <UseState />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
