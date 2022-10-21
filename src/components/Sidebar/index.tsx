import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import Logo from '../../assets/Logo/ZeusAgro.jpeg'
import "./sidebar.scss";
import { useTranslation } from "react-i18next";

export function Sidebar() {
  const navigate = useNavigate();
  const SignOut = useCallback(() => {
  signOut(auth)
  navigate("/");
  console.log("aperte");
  }, [navigate]);

  function handleClick() {
    navigate('/home')
  }
  const {t} = useTranslation();
  return (
    <div className="sidebar">

      <div className="top">
                <span onClick={handleClick}role="button">
                  <img src={Logo} alt="logo zeus" className="logo"/>
                </span>
            </div>
      <div className="center">
        <ul>
          <div className="main">
            <li>
              <DashboardIcon className="icon" />
              <NavLink to="/home" role="button">{t('Dashboard')}</NavLink>
            </li>

            <li>
              <BarChartIcon className="icon" />
              <NavLink to="/statistics" role="button">{t('Statistics')}</NavLink>
            </li>

            <li>
              <MapIcon className="icon" />
              <NavLink to="/maps" role="button">{t('Maps')}</NavLink>
            </li>
          </div>

          <div className="users">
            <li>
              <GroupIcon className="icon" />
              <NavLink  to="/user">{t('Users')}</NavLink>
            </li>
          </div>

            <li>
              <SettingsIcon className="icon"/>
              <span role="button">{t('Settings')}</span>  
            </li>
            <li>
              <div className="icon">
                <LogoutIcon />
                <span onClick={SignOut}role="button">{t('Logout')}</span>
              </div>
            </li>
          
        </ul>
      </div>
    </div>
  );
}

