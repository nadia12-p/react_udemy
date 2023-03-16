import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirsApp';
import { HelloWorldApp } from './HelloWorldApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
        <FirstApp />
    </React.StrictMode>
);