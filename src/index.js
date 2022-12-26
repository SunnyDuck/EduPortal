import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import userInfo from './state'
import {rerenderEntireTree} from './render'

rerenderEntireTree(userInfo);

reportWebVitals();
