import React from "react";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig";
import Logo from "../../assets/Logo/ZeusAgro.jpeg";
import "./sidebar.scss";
import { useTranslation } from "react-i18next";
import { Button, IconButton, Popover, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from "@mui/icons-material/Group";
import MapIcon from "@mui/icons-material/Map";
import BarChartIcon from "@mui/icons-material/BarChart";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Fingerprint } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';

export function Sidebar() {
  const navigate = useNavigate();
  const SignOut = useCallback(() => {
    signOut(auth);
    navigate("/");
    console.log("aperte");
  }, [navigate]);

  function handleeClick() {
    navigate("/profile");
  }

  function handleClick() {
    navigate("/home");
  }
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const style = {
    backgroundColor: "#333",
    height: "90vh",
  
  };

  return (
    <div className="sidebar">
      <div className="top">
        <>
          <IconButton aria-label="fingerprint" color="warning" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            style={style}
            size="200px"
          >
            <div>
              <ul>
                <div className="main">
                  <li>
                    <DashboardIcon className="icon" />
                    <NavLink to="/home" role="button">
                      {t("Dashboard")}
                    </NavLink>
                  </li>

                  <li>
                    <BarChartIcon className="icon" />
                    <NavLink to="/statistics" role="button">
                      {t("Statistics")}
                    </NavLink>
                  </li>

                  <li>
                    <MapIcon className="icon" />
                    <NavLink to="/maps" role="button">
                      {t("Maps")}
                    </NavLink>
                  </li>
                </div>

                <div className="users">
                  <li>
                    <GroupIcon className="icon" />
                    <NavLink to="/user">{t("Users")}</NavLink>
                  </li>
                </div>

                <li>
                  <SettingsIcon className="icon" />
                  <span role="button">{t("Settings")}</span>
                </li>
                <li>
                  <div className="icon">
                    <LogoutIcon />
                    <span onClick={SignOut} role="button">
                      {t("Logout")}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </Drawer>
        </>

        <span onClick={handleClick} role="button">
          <img src={Logo} alt="logo zeus" className="logo" />
        </span>

        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <Button className="item" {...bindTrigger(popupState)}>
                <NotificationsIcon color="warning" className="icon" />
              </Button>
              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Typography sx={{ p: 2 }}>{t("No Notifications")}.</Typography>
              </Popover>
            </div>
          )}
        </PopupState>

        <div className="item">
          <span role="button" onClick={handleeClick}>
            <AccountCircleRoundedIcon color="warning" className="iconp" />
          </span>
        </div>
      </div>
    </div>
  );
}
