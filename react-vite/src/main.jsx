import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import configureStore from "./redux/store";
import { router } from "./router";
import * as sessionActions from "./redux/session";
import * as watchlistActions from "./redux/watchlist"
import "./index.css";

const store = configureStore();

if (import.meta.env.MODE !== "production") {
  console.log('bah')
  window.store = store;
  window.sessionActions = sessionActions;
  window.watchlistActions = watchlistActions
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
    KKK
  </React.StrictMode>
);
