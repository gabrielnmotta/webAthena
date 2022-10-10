import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dash } from "../components/Dash";
import { Maps } from "../components/Maps";
import { CustomerProvider } from "../firebase/ContextAuth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Usuarios } from "../pages/Usuarios";
import { Edit } from "../pages/Usuarios/EditUser";
import { NewUser } from "../pages/Usuarios/newUser";
import store from "../store";
import PrivateRoute from "./privateRouter";


function Router() {
  return (
    <BrowserRouter>
      <CustomerProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path="/maps" element={<Dash />} >
             <Route path="/maps" element={<Maps />} />
            </Route>
            
            <Route path="/user" element={<Dash />} >
              <Route path="/user" element={<Usuarios />} />
              <Route path="/user/:id" element={<Edit />} />
              <Route path="/user/newUser/" element={<NewUser />} />
            </Route>

            <Route path="/home" element={<Dash />} >
              <Route index element={<PrivateRoute><Home /></PrivateRoute>} />
            </Route>
          </Routes>
        </Provider>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default Router;