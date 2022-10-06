<<<<<<< HEAD
import "./style.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
=======
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "../../assets/Logo/ZeusAgro.jpeg";
import "./style.scss";


function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="icon" ></img>
            <input className="busca" placeholder="buscar"></input>
            <nav>
                <ul className="menu">
                    <li><NotificationsIcon/></li>
                    <li><SettingsIcon/></li>
                </ul>
            </nav>
>>>>>>> master

export function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="busca" placeholder="buscar"></input>
        </div>

        <div className="items">
          <div className="item">
            <NotificationsIcon className="icon"/>
          </div>
          <div className="item">
            <SettingsIcon className="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
}

