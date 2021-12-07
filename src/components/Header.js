import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguuageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <SearchIcon className="s__icon" />
      </div>

      <div className="header__right">
        <p className="ptag">Become a host</p>
        <LanguuageIcon className="icon1" />
        <ExpandMoreIcon className="icon2" />
        <Avatar className="icon3" />
      </div>
    </div>
  );
}

export default Header;
