import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./HeaderOption.css";

const HeaderOption = (props) => {
  const { avatar, Icon, title, onClick } = props;
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption-icon"></Icon>}
      {avatar && (
        <Avatar className="headerOption-icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
