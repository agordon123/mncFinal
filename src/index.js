import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LogRocket from "logrocket";
import { AuthProvider } from './components/context/auth';
import {BrowserRouter} from 'react-router-dom';
LogRocket.init("3fiizl/test-server");
LogRocket.identify("3fiizl/test-server", {
  name: "Adam Gordon",
  email: "adamg42685@gmail.com",

  // Add your own custom user variables here, ie:
  subscriptionType: "pro",
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
