import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import "./style.scss";

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

