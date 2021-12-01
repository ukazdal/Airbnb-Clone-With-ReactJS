import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="footer">
      <p>© 2021 Airbnb clone! No rights reserved - this is a demo!</p>
      <p>Privacy · Terms · Sitemap · Company Details</p>
      <p>By Ukazdal </p>
      <a href="https://www.linkedin.com/in/ufuk-kazdal-499478b0/">
        <LinkedInIcon />
      </a>
    </div>
  );
}

export default Footer;
