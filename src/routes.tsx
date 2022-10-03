import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;