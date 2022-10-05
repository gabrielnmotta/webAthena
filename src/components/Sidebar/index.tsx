import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import MapIcon from "@mui/icons-material/Map";
import { Divider } from "@mui/material";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
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
      <div className="center">
        <ul>
          <div className="main">
            <li>
              <div className="icon">
                <DashboardIcon />
              </div>
              <span role="button">Dashboard</span>
            </li>
            <li>
              <div className="icon">
                <BarChartIcon />
              </div>
              <span role="button">Statistics</span>
            </li>
            <li>
              <div className="icon">
                <MapIcon />
              </div>
              <span role="button">Maps</span>
            </li>
          </div>
          <Divider />
          <div className="users">
            <li>
              <div className="icon">
                <GroupIcon />
              </div>
              <span role="button">Users</span>
            </li>
            <li>
              <div className="icon">
                <AccountCircleIcon />
              </div>
              <span>Profile</span>
            </li>
          </div>
          <Divider />
          <div className="settings">
            <li>
              <div className="icon">
                <HelpIcon />
              </div>
              <span>Help</span>
            </li>
            <li>
              <div className="icon">
                <InfoIcon />
              </div>
              <span>Information</span>
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