import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// ReactDOM.render(<div>
//   <h1>hello world</h1>
// </div>, document.getElementById('root'));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />)