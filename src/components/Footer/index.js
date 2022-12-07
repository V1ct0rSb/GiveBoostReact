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
            <h4>Empresa</h4>
            <ul>
              <li>
                <Link to="/quemsomos"> Quem somos </Link>
              </li>
              <li>
                <Link to="/"> nossos serviços </Link>
              </li>
              <li>
                <Link to="/"> política de privacidade </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Loja online</h4>
            <ul>
              <li>
                <Link to="/">Endereço</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Redes Sociais</h4>

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
