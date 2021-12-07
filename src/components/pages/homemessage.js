import React from "react";
import "./homemessage.css";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import ForwardToInboxIcon from "@material-ui/icons/Forward";
import BusinessIcon from "@material-ui/icons/Business";

function homemessage() {
  return (
    <div className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          nobis?
        </p>
      </div>
      <div className="container">
        <div className="contact__info">
          <div className="box">
            <div className="icon">
              <div className="text">
                <h3>
                  Address <BusinessIcon />
                </h3>
                <p>
                  43325 USA Camp, <br /> New York Usa <br />
                  559944
                </p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <div className="text">
                <h3>
                  Phone <PhoneAndroidIcon />
                </h3>
                <p>0090-532-154-45-01</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <div className="text">
                <h3>
                  Email <ForwardToInboxIcon />
                </h3>
                <p>info@ufukkazdal.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default homemessage;
