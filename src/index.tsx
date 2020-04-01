import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import { ToastProvider } from "react-toast-notifications";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./localization/i18n";
import "bulma/css/bulma.css";
import "./index.css";
import { apolloClient } from "./lib/apollo";

ReactDOM.render(
  <ToastProvider>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </ToastProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
