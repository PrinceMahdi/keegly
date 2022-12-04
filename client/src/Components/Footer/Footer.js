/* --------------- SCSS IMPORTS --------------- */
import "./Footer.scss";
/* --------------- REACT IMPORTS --------------- */
import { Link } from "react-router-dom";
/* --------------- ASSET IMPORTS --------------- */
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h1 className="footer__logo">
          <span>Keegly</span>
        </h1>
        <nav className="footer__nav">
          <ul className="footer__nav-menu">
            <Link to={"/"}>
              <li className="footer__nav-item">Home</li>
            </Link>
            <Link to={"/team"}>
              <li className="footer__nav-item">Team</li>
            </Link>
            <Link to={"/pricing"}>
              <li className="footer__nav-item">Pricing</li>
            </Link>
            <Link to={"/contact"}>
              <li className="footer__nav-item">Contact</li>
            </Link>
            <Link to={"/login"}>
              <li className="footer__nav-item">Login</li>
            </Link>
            <Link to={"/signup"}>
              <li className="footer__nav-item">Sign Up</li>
            </Link>
          </ul>
        </nav>
        <div className="footer--bottom">
          <p className="footer__copyright">
            © 2022 Keegly. All rights reserved.
          </p>
          <div className="footer__social-icons">
            <BsInstagram size={22} />
            <BsYoutube size={22} />
            <BsGithub size={22} />
            <BsTwitter size={22} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
