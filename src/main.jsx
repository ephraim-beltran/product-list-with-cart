import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterComponent } from "./router";
import { Provider } from "react-redux";
import store from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterComponent />
    </Provider>
  </StrictMode>,
);
