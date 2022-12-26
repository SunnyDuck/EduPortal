import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {addName, colorReplace} from "./state";
import {addSurName} from "./state";
import {addPost} from "./state";


export let rerenderEntireTree = (store) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App store={store} addName={addName} addSurname={addSurName} addPost={addPost} colorReplace={colorReplace}/>
        </React.StrictMode>
    );
}
