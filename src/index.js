import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/index.css';
import App from './components/App';
import Filestate from './components/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Filestate>
    <App />
    </Filestate>
);

