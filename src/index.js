import React from 'react';
import './index.css';
import App from './App';
// import 'react-app-polyfill/ie11'; // For IE 11 support
// import 'react-app-polyfill/stable';
// import './polyfill'
import reportWebVitals from './reportWebVitals';
import storage from "redux-persist/lib/storage";
import { PersistGate } from   "redux-persist/integration/react";
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./Redux/Store";
import { persistStore, persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};


const persistedReducer = persistReducer(persistConfig, reducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
