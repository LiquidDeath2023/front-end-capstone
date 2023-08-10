import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// creates the root to dispay React components from in browser DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);

// renders our App parent component on our root
root.render(<App />);
