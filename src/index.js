import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import Study from "./study/Study";
import Game from "./example/Game";

//方案1
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
//方案2
ReactDOM.createRoot(document.getElementById("study")).render(<Study/>);

//方案3
ReactDOM.createRoot(document.getElementById("game")).render(<Game/>);