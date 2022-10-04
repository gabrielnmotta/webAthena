import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { Home } from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default Router;