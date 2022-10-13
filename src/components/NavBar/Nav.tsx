import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./style.scss";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="busca" placeholder="buscar"></input>
        </div>

        <div className="items">
          <div className="item">
            <NotificationsIcon className="icon" />
          </div>
          <div className="item">
            <NavLink to="/profile">
              <AccountCircleRoundedIcon className="icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
