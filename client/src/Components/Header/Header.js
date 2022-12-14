/* < ------------ SCSS IMPORTS ------------> */
import "./Header.scss";
/* < ------------ REACT IMPORTS ------------> */
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Header = ({ user, userData }) => {
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

  const logout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
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
          {user ? (
            <>
              <img
                src={user.photos[0].value}
                alt="profile"
                className="header__profile-picture"
                referrerPolicy="no-referrer"
              />
              {userData?.map((singleUser) => {
                if (user.photos[0].value === singleUser.photo) {
                  return (
                    <Link to={`/me/${singleUser.uniqueId}`} key={uuidv4()}>
                      <span className="header__name">{`${user.name.givenName}`}</span>
                    </Link>
                  );
                }
              })}
              <button className="header__button" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="header__button" onClick={toLoginPage}>
                Login
              </button>
              <button className="header__button" onClick={toSignUpPage}>
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
