import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import "./style.scss";
import { NavLink, useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

export function Navbar() {

  let navigate = useNavigate();
    function handleClick() {
      navigate('/profile')
    }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input className="busca" placeholder="Search"></input>
        </div>

        <div className="items">
          <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button  className="item" {...bindTrigger(popupState)}>
             <NotificationsIcon className="icon" />
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{ p: 2 }}>No Notifications.</Typography>
          </Popover>
        </div>
      )}
    </PopupState>

          <div className="item">
            <span role="button" onClick={handleClick}><AccountCircleRoundedIcon className="iconp" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
