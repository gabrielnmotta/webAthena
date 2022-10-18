import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dash } from "../components/Dash";
import { Maps } from "../components/Maps";
import { CustomerProvider } from "../firebase/ContextAuth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Usuarios } from "../pages/Usuarios";
import { Edit } from "../pages/Usuarios/EditUser";

import store from "../store";
import PrivateRoute from "./privateRouter";
import { Profile } from '../pages/Profile/index';
import { NewUserModal } from '../pages/Usuarios/newModal/index';
import { EditModal } from "../pages/Usuarios/editModal";


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
              <Route path="/user/:id" element={<EditModal />} />
              <Route path="/user" element={<NewUserModal />} />
            </Route>

            <Route path="/profile" element={<Dash />} >
              <Route path="/profile" element={<Profile />} />
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