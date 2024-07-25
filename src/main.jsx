import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { store, persistor } from "./redux/store.js";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "modern-normalize"; // импорт библиотеки модерн нормалайз
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <App />
            </PersistGate>
         </Provider>
      </BrowserRouter>
   </React.StrictMode>
);
