import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "../pages/Usuarios/ContextUser";
import { CustomerProvider } from "../firebase/ContextAuth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import store from "../store";
import PrivateRoute from "./privateRouter";
import { Usuarios } from "../pages/Usuarios";

// import PrivateRoute from "./privateRouter";


function Router() {
  return (
    <BrowserRouter>
      <CustomerProvider>
        <UserProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><Usuarios /></PrivateRoute>} />
          </Routes>
        </Provider>
        </UserProvider>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default Router;