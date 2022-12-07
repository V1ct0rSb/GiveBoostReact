import React from "react";
import "./style.css";

import { Link } from "react-router-dom";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="row-footer">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/">Who We Are </Link>
              </li>
              <li>
                <Link to="/">Our Services </Link>
              </li>
              <li>
                <Link to="/">Privacy Policy </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Online Store</h4>
            <ul>
              <li>
                <Link to="/">Address</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Social Networks</h4>

            <div className="medias-socias">
              <Link to="/">
                <FaFacebookF size={25} />
              </Link>
              <Link to="/">
                <FaInstagram size={25} />
              </Link>
              <Link to="/">
                <FaTwitter size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
