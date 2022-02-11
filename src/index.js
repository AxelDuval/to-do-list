import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FirebaseDatabaseProvider} from "@react-firebase/database";
import {firebaseConfig} from "./Firebase/Firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


ReactDOM.render(
  <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
    <App />
 </FirebaseDatabaseProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
