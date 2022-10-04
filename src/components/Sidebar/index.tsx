import { Divider } from "@mui/material";
import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from '@mui/icons-material/Group';
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

export function Sidebar() {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <div className="main">
            <li>
              <DashboardIcon className="icon" />
              <span role="button">Dashboard</span>
            </li>
            <li>
              <BarChartIcon className="icon" />
              <span role="button">Statistics</span>
            </li>
            <li>
              <MapIcon className="icon" />
              <span role="button">Maps</span>
            </li>
          </div>
          <Divider />
          <div className="users">
            <li>
              <GroupIcon className="icon" />
              <span role="button">Users</span>
            </li>
            <li>
              <AccountCircleIcon className="icon" />
              <span>Profile</span>
            </li>
          </div>
          <Divider />
          <div className="settings">
            <li>
              <HelpIcon className="icon" />
              <span>Help</span>
            </li>
            <li>
              <InfoIcon className="icon" />
              <span>Information</span>
            </li>
            <li>
              <LogoutIcon className="icon" />
              <span role="button">Logout</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
