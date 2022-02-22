import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const firebaseConfig = {
  apiKey: 'AIzaSyCDhrMvxRmnQIhabQpMd23CrX8AZ6cwjN8',
  authDomain: 'reservation-fe876.firebaseapp.com',
  projectId: 'reservation-fe876',
  storageBucket: 'reservation-fe876.appspot.com',
  messagingSenderId: '557705528312',
  appId: '1:557705528312:web:17c172dfac69d681878c0d',
  measurementId: 'G-D89QNQ4GCV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// This is where the magic happens. React renders our App component
// inside the div with the id "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
