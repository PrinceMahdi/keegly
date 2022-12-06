/* < ------------ SCSS IMPORTS ------------> */
import "./Header.scss";
/* < ------------ REACT IMPORTS ------------> */
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  const navigate = useNavigate();
  const location = useLocation();

  const toLoginPage = () => {
    navigate("/login");
  };
  const toSignUpPage = () => {
    navigate("/signup");
  };
  return (
    <header className="header">
      <div className="header__content">
        <Link to={"/"} className="header__logo">
          Keegly
          <span>
            <BsCircleFill />
          </span>
        </Link>

        {!menuOpen ? (
          <GiHamburgerMenu
            className="header__hamburger-icon"
            onClick={menuToggler}
          />
        ) : (
          <AiOutlineClose
            className="header__hamburger-icon"
            onClick={menuToggler}
          />
        )}
        <nav
          className={`${"header__nav"} ${menuOpen ? "header__nav--open" : {}}`}
        >
          <NavLink
            to={"/"}
            className={(navData) =>
              navData.isActive
                ? "header__nav-item header__nav-item--active"
                : "header__nav-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/team"}
            className={(navData) =>
              navData.isActive
                ? "header__nav-item header__nav-item--active"
                : "header__nav-item"
            }
          >
            Team
          </NavLink>
          <NavLink
            to={"/pricing"}
            className={(navData) =>
              navData.isActive
                ? "header__nav-item header__nav-item--active"
                : "header__nav-item"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to={"/contact"}
            className={(navData) =>
              navData.isActive
                ? "header__nav-item header__nav-item--active"
                : "header__nav-item"
            }
          >
            Contact
          </NavLink>
        </nav>
        <div
          className={`${"header__cta-container"} ${
            menuOpen ? "header__cta-container--open" : {}
          }`}
        >
          <button className="header__button" onClick={toLoginPage}>
            Login
          </button>
          <button className="header__button" onClick={toSignUpPage}>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
