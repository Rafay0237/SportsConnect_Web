import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import {NextUIProvider} from '@nextui-org/react'
import { PersistGate } from "redux-persist/integration/react";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
      <NextUIProvider>
        <App />
      </NextUIProvider>
      </StrictMode>
    </PersistGate>
  </Provider>
);
