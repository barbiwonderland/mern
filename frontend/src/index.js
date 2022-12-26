import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from './routes';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store.js";
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // OJO React strict mode renderizad dos veces los componentes
  <React.StrictMode>
    <Provider store={store}>

      {/* Browser Router tiene que ir acá para que funcione bien */}
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


