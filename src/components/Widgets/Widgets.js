import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-article-left">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>Linkedin News</h2>
        <InfoIcon />
      </div>

      {newsArticle("The Full Stack Junkie Is Back", "Top news - 9099 reader")}
      {newsArticle("Coronavirus: UK updates", "Top news - 886 reader")}
      {newsArticle("Bitcoin Breaks $22K", "Crypto - 8000 reader")}
      {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
      {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
    </div>
  );
};

export default Widgets;
