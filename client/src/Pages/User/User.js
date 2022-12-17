import React from "react";
import Banner from "../../assets/demo/pexels-photo-1097456 copy.webp";
import ProfilePicture from "../../assets/demo/Screenshot 2022-12-14 at 9.50.01 PM copy.png";
import ProjectPicture from "../../assets/demo/mid copy.png";
import linkedIn from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";
import { BsDot } from "react-icons/bs";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { IoLogoChrome } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import "./User.scss";

const User = () => {
  return (
    <>
      <main className="user">
        <section className="profile">
          <div className="user--right">
            <div className="user__banner-container">
              <img
                src={Banner}
                alt="banner"
                className="user__banner-preview"
                style={{ borderColor: "#FFD700", borderWidth: "3px" }}
              />

              <img
                src={ProfilePicture}
                alt="profile"
                className="user__picture"
                style={{ borderColor: "#FFD700", borderWidth: "3px" }}
              />
            </div>
            <div className="profile__preview-info">
              <h1 className="user__name">
                Mahdi Shirmohammadi
              </h1>
              <h2 className="user__title">
                Full-Stack Web Developer
              </h2>
              <div className="profile__preview-info__content">
                <h3 className="profile__preview-info__company">BrainStation</h3>
                <span className="profile__preview-info__separator">|</span>
                <h3 className="profile__preview-info__location">
                  Vancouver, BC.
                </h3>
              </div>
              <div className="profile__preview-info__socials">
                <a
                  href={`https://www.linkedin.com/in/mahdishirmohammadi`}
                  target="_blank"
                  rel="noreferrer"
                  className="profile__preview-info__socials__linkedin"
                >
                  <img
                    src={linkedIn}
                    alt=""
                    className="profile__preview-info__socials__icon-linkedin"
                  />
                </a>
                <span className="profile__preview-info__separator">
                  <BsDot size={25} />
                </span>
                <a
                  href={`https://www.github.com/princemahdi`}
                  target="_blank"
                  rel="noreferrer"
                  className="profile__preview-info__socials__github"
                >
                  <img
                    src={github}
                    alt=""
                    className="profile__preview-info__socials__icon-github"
                  />
                </a>
                <span className="profile__preview-info__separator">
                  <BsDot size={25} />
                </span>
                <a
                  href={`https://www.instagram.com/mahdi`}
                  target="_blank"
                  rel="noreferrer"
                  className="profile__preview-info__socials__instagram"
                >
                  <img
                    src={instagram}
                    alt=""
                    className="profile__preview-info__socials__icon-instagram"
                  />
                </a>
              </div>

              <div className="user__preview__container">
                <div className="user__preview--left">
                  <h1 className="profile__preview-info__bio-title">About me</h1>
                  <p className="profile__preview-info__bio">
                    Hello everyone! and welcome to my profile!! I'm very glad to
                    see you here! :D
                  </p>
                </div>
                <div className="user__preview--right">
                  <h1 className="profile__preview-info__container--right__skill-title">
                    Skills
                  </h1>
                  <div className="profile__preview-info__container--right__skill">
                    <a
                      href="https://css-tricks.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="profile__preview-info__container--right__skill__text">
                        <DiCss3 size={50} />
                      </p>
                    </a>
                    <a
                      href="https://html.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="profile__preview-info__container--right__skill__text">
                        <DiHtml5 size={50} />
                      </p>
                    </a>
                    <a
                      href="https://www.javascript.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="profile__preview-info__container--right__skill__text">
                        <IoLogoJavascript size={50} />
                      </p>
                    </a>
                    <a
                      href="https://reactjs.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="profile__preview-info__container--right__skill__text">
                        <FaReact size={50} />
                      </p>
                    </a>
                    <a
                      href="https://nodejs.org/en/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="profile__preview-info__container--right__skill__text">
                        <GrNode size={50} />
                      </p>
                    </a>
                    <a
                      href="https://expressjs.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="profile__preview-info__container--right__skill__text">
                        <SiExpress size={50} />
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile__project__preview-wrapper">
              <h1 className="profile__project__preview-title">Projects</h1>
              <div className="profile__project__preview-container">
                <div className="user-box">
                  <img
                    src={ProjectPicture}
                    alt="project"
                    className="user__project-image"
                  />
                  <div className="user__preview-name">
                    <h3>This is my super cool project! :D</h3>
                    <div className="profile__project__preview-link__container">
                      <a href="link" target="_blank" rel="noreferrer">
                        <BsGithub size={40} />
                      </a>
                      <a href="link" target="_blank" rel="noreferrer">
                        <IoLogoChrome size={40} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <a href="link" download className="user-link">
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default User;
