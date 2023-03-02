import React, { useContext } from "react";
import "./Systems.css"

import PersonIcon from "@mui/icons-material/Person";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import TranslateIcon from "@mui/icons-material/Translate";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import PlaceIcon from "@mui/icons-material/Place";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ReviewsIcon from "@mui/icons-material/Reviews";

import "./Systems.css";
import myImage from "../../assets/_MG_8554 (2).jpg";
import { ContextApi } from "../../context/context";

const Systems = () => {
  const {relatedToSystems} = useContext(ContextApi);
  if(relatedToSystems.systemsToggle){
    return (
      <div className="systems">
        <div className="systems__header">
          <div>
            <div className="settings__logo">
              <img className="myImage" src={myImage} alt="myImage" />
            </div>
            <div>
              <h4>Kamron Olimov</h4>
              <p>kolimov0825@gmail.com</p>
            </div>
          </div>
          <span>Manage your Google Account</span>
        </div>
        <div className="systems__body">
          <div>
            <PersonIcon />
            <p>Create a channel</p>
          </div>
          <div>
            <LiveTvIcon />
            <p>LiveTvIcon</p>
          </div>
          <div>
            <PeopleAltIcon />
            <p>Switch account</p>
          </div>
          <div>
            <ExitToAppIcon />
            <p>Sign Out</p>
          </div>
        </div>
        <div className="systems__body">
          <div>
            <AttachMoneyIcon />
            <p>Purchases and memberships</p>
          </div>
          <div>
            <DriveFolderUploadIcon />
            <p>You data in You Tube</p>
          </div>
        </div>
        <div className="systems__body">
          <div>
            <DarkModeIcon />
            <p>Appearance: Device theme</p>
          </div>
          <div>
            <TranslateIcon />
            <p>Language: English</p>
          </div>
          <div>
            <AddModeratorIcon />
            <p>Restricted Mode: Off</p>
          </div>
          <div>
            <PlaceIcon />
            <p>Location: United States</p>
          </div>
          <div>
            <KeyboardIcon />
            <p>Keyboard shortcuts</p>
          </div>
        </div>
        <div className="systems__body">
          <div>
            <SettingsApplicationsIcon />
            <p>Settings</p>
          </div>
        </div>
        <div className="systems__body">
          <div>
            <HelpOutlineIcon />
            <p>Help</p>
          </div>
          <div>
            <ReviewsIcon />
            <p>Send Feedback</p>
          </div>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
};

export default Systems;
