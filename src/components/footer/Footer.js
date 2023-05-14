import React from "react";
import "./Footer.css";
import { FiTwitter, FiGithub, FiFigma } from "react-icons/fi";
import ScrollToTopButton from "../scrollToTopButton/ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 - MigraineProyect Web© 2023 Todos los derechos reservadosS</p>
        <ul className="footer-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/info"> Información</a>
          </li>
          <li>
            <a href="/form">Seguimiento</a>
          </li>
          <li>
            <a href="/tips">Consejos</a>
          </li>
          <li>
            <a href="/rss.xml"> RSS</a>
          </li>
          <ScrollToTopButton />
        </ul>

        <div className="social">
          <a href="/">
            <FiTwitter />
          </a>
          <a href="https://github.com/kirianVazqq/MigraineProyect">
            <FiGithub />
          </a>
          <a href="https://www.figma.com/file/A0yLpmhdZHuAD0Wjb98ykv/Untitled?node-id=0%3A1&t=DnBE44aGYV0tyZKv-1">
            <FiFigma />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
