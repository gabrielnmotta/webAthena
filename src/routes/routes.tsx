import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CustomerProvider } from "../firebase/ContextAuth";
import PrivateRoute from "./privateRouter";
import { Dash } from "../components/Dash";
// import PrivateRoute from "./privateRouter";


function Router() {
  return (
    <BrowserRouter>
      <CustomerProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Dash/>} >
              <Route index element={<PrivateRoute><Home /></PrivateRoute>}/>
            </Route>
          </Routes>
        </Provider>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default Router;