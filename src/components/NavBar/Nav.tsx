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

        </div>

    );

}

export default Navbar