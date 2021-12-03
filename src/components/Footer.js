import React from "react";
import "./Footer.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <div className="footer-left">
          <h5>Support</h5>
          <p>Help Center</p>
          <p>Security information</p>
          <p>Cancelleation options</p>
          <p>Our COVID-19 precautions</p>
          <p>Support for people with disabilities</p>
          <p>Report a problem in your neighborhood</p>
        </div>
        <div className="footor-main">
          <h5>Community</h5>
          <p>Airbnb.org: disaster relief</p>
          <p>Support Afghan refugees</p>
          <p>Celebrating diversity and belonging</p>
          <p>anti-discrimination</p>
        </div>
        <div className="footer-right">
          <h5>Hosting</h5>
          <p>Try hosting</p>
          <p>AirCover: host protection</p>
          <p>Visit the community forum</p>
          <p>Responsible hosting</p>
        </div>
        <div className="footer-end">
          <h5>About Us</h5>
          <p>Press room</p>
          <p>Information about new features</p>
          <p>A letter from our founders</p>
          <p>Career Opportunities</p>
          <p>Investors</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
      <div className="designer">
        <p>© 2021 Airbnb, Inc. · security · Conditions · Sitemap</p>
        <h5>
          By Ukazdal <LinkedInIcon />
        </h5>
      </div>
    </div>
  );
}

export default Footer;
