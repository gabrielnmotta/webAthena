import BarChartIcon from "@mui/icons-material/BarChart";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logo from '../../assets/Logo/ZeusAgro.jpeg'

export function Sidebar() {
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
  
              
  
              <div className="users">
                <li>
                  <GroupIcon className="icon" />
                  <span role="button">Users</span>
                </li>
              </div>
  
              
              <div className="settings">
                <li>
                  <SettingsIcon className="icon" />
                  <span role="button">Settings</span>
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
