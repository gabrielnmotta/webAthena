import { Divider } from "@mui/material";
import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

export function Sidebar() {
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
              <span role="button">Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
