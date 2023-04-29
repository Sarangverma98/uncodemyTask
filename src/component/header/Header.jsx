import React from "react";
import logo from "../../images/UpGrad.png"
import "./header.css"
import whatsAppLogo from "../../images/whatsapp.png"

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <nav className="navbar">
              <img src={logo} alt="upGrad" title="upGrad" />
                <div className="contact-btn">
                    <button className="mail-btn">Write To Us</button>
                    <button className="call-btn">Call Us</button>
                    <button className="chat-btn"><img src={whatsAppLogo} className="whatsappLogo" />Chat With Us</button>
                </div>
          </nav>
        </div>
        <hr />
      </header>
    </div>
  );
};

export default Header;
