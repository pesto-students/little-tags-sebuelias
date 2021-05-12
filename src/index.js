import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/createStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirebaseContext from './services/Firebase/context';
import Firebase from './services/Firebase/firebase';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <FirebaseContext.Provider value={new Firebase()}>
          <App />
        </FirebaseContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
