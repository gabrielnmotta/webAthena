import "./dash.scss";
import { Navbar } from "../../components/NavBar/Nav";
import { Sidebar } from "../../components/Sidebar/index";
import { Outlet } from "react-router-dom";

export function Dash() {
  return (
    <div className="dash">
      <Sidebar />

      <div className="dashContainer">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
