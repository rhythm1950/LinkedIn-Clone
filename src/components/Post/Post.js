import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "../InputOption/InputOption";
import "./Post.css";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

const Post = forwardRef((props, ref) => {
  const { name, description, message, photoUrl } = props;
  return (
    <div ref={ref} className="post">
      <div className="post-header">
        <Avatar scr={photoUrl}>{name[0]}</Avatar>
        <div className="post-info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post-body">
        <p>{message}</p>
      </div>

      <div className="post-buttons">
        <InputOption
          Icon={ThumbUpOffAltIcon}
          title="Like"
          color="gray"
        ></InputOption>
        <InputOption Icon={ChatIcon} title="Comment" color="gray"></InputOption>
        <InputOption Icon={ShareIcon} title="Share" color="gray"></InputOption>
        <InputOption Icon={SendIcon} title="Send" color="gray"></InputOption>
      </div>
    </div>
  );
});

export default Post;
