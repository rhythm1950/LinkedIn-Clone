import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "../HeaderOption/HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img src="https://i.ibb.co/kxJ1Z1J/3536505.png" alt=""></img>
        <div className="header-search">
          <SearchIcon></SearchIcon>
          <input type="text" />
        </div>
      </div>

      <div className="header-right">
        <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
        <HeaderOption
          Icon={SupervisorAccountIcon}
          title="My Network"
        ></HeaderOption>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
        <HeaderOption Icon={TextsmsIcon} title="Messaging"></HeaderOption>
        <HeaderOption
          Icon={NotificationsIcon}
          title="Notification"
        ></HeaderOption>
        <HeaderOption
          avatar={true}
          title="Me"
          onClick={logoutApp}
        ></HeaderOption>
      </div>
    </div>
  );
};

export default Header;
