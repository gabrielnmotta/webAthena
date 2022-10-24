import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useTranslation } from "react-i18next";

export function Navbar() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/profile");
  }

  const {t} = useTranslation();
  return (
    <div className="qwe">
      <div className="navbar">
        <div className="wrapper">
          <div className="items">
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Button className="item" {...bindTrigger(popupState)}>
                    <NotificationsIcon className="icon" />
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
                    <Typography sx={{ p: 2 }}>{t('No Notifications')}.</Typography>
                  </Popover>
                </div>
              )}
            </PopupState>

            <div className="item">
              <span role="button" onClick={handleClick}>
                <AccountCircleRoundedIcon className="iconp" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
