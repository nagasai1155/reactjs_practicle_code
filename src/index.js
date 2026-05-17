  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App1 from './App1.js';
  import reportWebVitals from './reportWebVitals';
  import CounterApp from './CounterApp.js'
  import FetchData from './FetchData.js'
  import LoadingState from './LoadingState.js'
  import Inter from './Inter.js'
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
   
      <Inter />
    
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
