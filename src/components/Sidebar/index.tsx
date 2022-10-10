import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import { Divider } from "@mui/material";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import Logo from '../../assets/Logo/ZeusAgro.jpeg'
import "./sidebar.scss";

export function Sidebar() {
  const navigate = useNavigate();
  const SignOut = useCallback(() => {
  signOut(auth)
  navigate("/");
  console.log("aperte");
  }, [navigate]);

  return (
    <div className="sidebar">

      <div className="top">
                <img src={Logo} alt="logo zeus" className="logo"/>
            </div>
      <div className="center">
        <ul>
          <div className="main">
            <li>
              <DashboardIcon className="icon" />
              <NavLink to="/home" role="button">Dashboard</NavLink>
            </li>

            <li>
              <BarChartIcon className="icon" />
              <span role="button">Statistics</span>
            </li>

            <li>
              <MapIcon className="icon" />
              <NavLink to="/maps" role="button">Maps</NavLink>
            </li>
          </div>

          <Divider />

          <div className="users">
            <li>

              <GroupIcon className="icon" />
              <NavLink  to="/user">Users</NavLink>
            </li>
          </div>

          <Divider />
          <div className="settings">
            <li>
              <SettingsIcon className="icon"/>
              <span role="button">Settings</span>
            </li>
            <li>
              <div className="icon">
                <LogoutIcon />
              </div>
              <span onClick={SignOut}role="button">Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

