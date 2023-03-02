import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./Header.css";
import myImage from "../../assets/_MG_8554 (2).jpg";
import { ContextApi } from "../../context/context";

export function Header() {
  const { relatedToSidebar,relatedToSystems } = useContext(ContextApi);
  return (
    <div className="header">
      <div className="container header__container">
        <div className="header__left">
          <MenuIcon
            className="menuIcon"
            onClick={() => relatedToSidebar.setSideBar((prev) => !prev)}
          />
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </div>

        <div className="header__center">
          <input type="text" />
          <SearchIcon className="header__searchbutton" />
        </div>

        <div className="header__right">
          <VideoCallIcon className="header__icon iconsInOne" />
          <AppsIcon className="header__icon iconsInOne" />
          <NotificationsIcon className="header__icon iconsInOne" />
          <img
            alt="Olimov Komronbek"
            src={myImage}
            className="myImage"
            onClick={() => relatedToSystems.setSystemsToggle((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}
