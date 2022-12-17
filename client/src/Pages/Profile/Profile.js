import "./Profile.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import linkedIn from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { IoLogoChrome } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import axios from "axios";

const Profile = ({ userData }) => {
  const params = useParams();

  const [profileBanner, setProfileBanner] = useState(
    localStorage.getItem("profileBanner") || null
  );
  const [profilePicture, setProfilePicture] = useState(
    localStorage.getItem("profilePicture") || null
  );
  const [profileName, setProfileName] = useState(
    localStorage.getItem("profileName") || ""
  );
  const [profileJobTitle, setProfileJobTitle] = useState(
    localStorage.getItem("profileJobTitle") || ""
  );
  const [profileLinkedin, setProfileLinkedin] = useState(
    localStorage.getItem("profileLinkedin") || ""
  );
  const [profileGithub, setProfileGithub] = useState(
    localStorage.getItem("profileGithub") || ""
  );
  const [profileInstagram, setProfileInstagram] = useState(
    localStorage.getItem("profileInstagram") || ""
  );
  const [profileCompany, setProfileCompany] = useState(
    localStorage.getItem("profileCompany") || ""
  );
  const [profileLocation, setProfileLocation] = useState(
    localStorage.getItem("profileLocation") || ""
  );
  const [profileBio, setProfileBio] = useState(
    localStorage.getItem("profileBio") || ""
  );
  const [projectName, setProjectName] = useState(
    localStorage.getItem("projectName") || ""
  );
  const [projectGithubLink, setProjectGithubLink] = useState(
    localStorage.getItem("projectGithubLink") || ""
  );
  const [projectLiveLink, setProjectLiveLink] = useState(
    localStorage.getItem("projectLiveLink") || ""
  );
  const [projectPicture, setProjectPicture] = useState(
    localStorage.getItem("projectPicture") || null
  );
  const [profileResume, setProfileResume] = useState(
    localStorage.getItem("profileResume") || null
  );
  const [profileResumeUrl, setProfileResumeUrl] = useState(
    localStorage.getItem("profileResumeUrl") || null
  );
  const [color, setColor] = useState(
    localStorage.getItem("color") || "#181818"
  );

  // <--------------- Clear local storage -------------->
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  // <--------------- Handle Resume Download -------------->
  const handleFileChange = (e) => {
    // Get the selected file from the event object
    const selectedFile = e.target.files[0];

    // Update the state with the selected file
    setProfileResume(selectedFile);

    // Create a file reader
    const reader = new FileReader();

    // Event handler for when the file has been read
    reader.onload = (event) => {
      // Get the file URL
      const fileUrl = event.target.result;

      // Update the state with the file URL
      setProfileResumeUrl(fileUrl);
    };

    // Read the file as a URL
    reader.readAsDataURL(selectedFile);
  };

  // <---------------Storing the selected skills in local storage -------------->
  const initialArray = localStorage.getItem("myArray")
    ? JSON.parse(localStorage.getItem("myArray"))
    : [];

  const [selectedSkills, setSelectedSkills] = useState(initialArray);

  useEffect(() => {
    localStorage.setItem("myArray", JSON.stringify(selectedSkills));
  }, [selectedSkills]);

  // <---------------Storing the user inputs in local storage -------------->
  useEffect(() => {
    localStorage.setItem("profileBanner", profileBanner);
    localStorage.setItem("profilePicture", profilePicture);
    localStorage.setItem("profileName", profileName);
    localStorage.setItem("profileJobTitle", profileJobTitle);
    localStorage.setItem("profileLinkedin", profileLinkedin);
    localStorage.setItem("profileGithub", profileGithub);
    localStorage.setItem("profileInstagram", profileInstagram);
    localStorage.setItem("profileCompany", profileCompany);
    localStorage.setItem("profileLocation", profileLocation);
    localStorage.setItem("profileBio", profileBio);
    localStorage.setItem("projectName", projectName);
    localStorage.setItem("projectGithubLink", projectGithubLink);
    localStorage.setItem("projectLiveLink", projectLiveLink);
    localStorage.setItem("projectPicture", projectPicture);
    localStorage.setItem("profileResume", profileResume);
    localStorage.setItem("profileResumeUrl", profileResumeUrl);
    localStorage.setItem("color", color);
  }, [
    profileBanner,
    profilePicture,
    profileName,
    profileJobTitle,
    profileLinkedin,
    profileGithub,
    profileInstagram,
    profileCompany,
    profileLocation,
    profileBio,
    projectName,
    projectGithubLink,
    projectLiveLink,
    projectPicture,
    profileResume,
    profileResumeUrl,
    color,
  ]);

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleBannerUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileBanner(reader.result);
    };
    reader.readAsDataURL(file);
  };
  const handleProjectPicUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectPicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (event) => {
    const options = event.target.options;

    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }

    setSelectedSkills(selectedOptions);
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
  ];

  clearLocalStorage();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      profileBanner,
      profilePicture,
      profileName,
      profileJobTitle,
      profileLinkedin,
      profileGithub,
      profileInstagram,
      profileCompany,
      profileLocation,
      profileBio,
      projectName,
      projectGithubLink,
      projectLiveLink,
      projectPicture,
      profileResume,
      profileResumeUrl,
      selectedSkills,
      color,
    };
    axios
      .post(`http://localhost:8080/newprofile/${params.id}`, newUser)
      .then(console.log("::: New profile created :::"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {userData &&
        userData.map((currentUser) => {
          if (currentUser?.uniqueId === params.id) {
            return (
              <section className="profile" key={currentUser.uniqueId}>
                <div className="profile--left">
                  <h1 className="profile--left__title">
                    Profile <span>Maker</span>
                  </h1>
                  <form
                    action=""
                    className="profile__form"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="profile__form-wrapper">
                      <div
                        className={
                          profileBanner
                            ? "profile__banner__file--upload profile__banner__file--upload--valid"
                            : "profile__banner__file--upload profile__banner__file--upload--invalid"
                        }
                      >
                        <input
                          type="file"
                          id="banner-picture"
                          name="banner-picture"
                          placeholder="Your Banner"
                          className="banner__picture-input"
                          onChange={handleBannerUpload}
                        />
                        <label
                          htmlFor="banner-picture"
                          className="profile__banner__picture-label"
                        >
                          Upload Banner
                        </label>
                      </div>
                      <div
                        className={
                          profilePicture
                            ? "profile__banner__file--upload profile__banner__file--upload--valid"
                            : "profile__banner__file--upload profile__banner__file--upload--invalid"
                        }
                      >
                        <input
                          type="file"
                          id="profile-picture"
                          name="profile-picture"
                          placeholder="Your Image"
                          className="profile__picture-input"
                          onChange={handleProfileUpload}
                        />
                        <label
                          htmlFor="profile-picture"
                          className="profile__picture-label"
                        >
                          Upload Picture
                        </label>
                      </div>
                      <div
                        className={
                          profileResume
                            ? "profile__banner__file--upload profile__banner__file--upload--valid"
                            : "profile__banner__file--upload profile__banner__file--upload--invalid"
                        }
                      >
                        <input
                          type="file"
                          name="profile-resume"
                          onChange={handleFileChange}
                          accept="application/pdf"
                          id="profile-resume"
                        />
                        <label
                          htmlFor="profile-resume"
                          className="profile__picture-label"
                        >
                          Upload Resume
                        </label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="fullName"
                          value={profileName}
                          onChange={(e) => setProfileName(e.target.value)}
                          required
                        />
                        <label className="placeholder">Full Name</label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="jobTitle"
                          value={profileJobTitle}
                          onChange={(e) => setProfileJobTitle(e.target.value)}
                          required
                        />
                        <label className="placeholder">Role</label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="company"
                          value={profileCompany}
                          onChange={(e) => setProfileCompany(e.target.value)}
                          required
                        />
                        <label className="placeholder">Company</label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="location"
                          value={profileLocation}
                          onChange={(e) => setProfileLocation(e.target.value)}
                          required
                        />
                        <label className="placeholder">Location</label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="linkedin"
                          value={profileLinkedin}
                          onChange={(e) => setProfileLinkedin(e.target.value)}
                          required
                        />
                        <label className="placeholder">LinkedIn</label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="github"
                          value={profileGithub}
                          onChange={(e) => setProfileGithub(e.target.value)}
                          required
                        />
                        <label className="placeholder">Github</label>
                      </div>
                      <div className="profile__input-group">
                        <input
                          type="text"
                          className="instagram"
                          value={profileInstagram}
                          onChange={(e) => setProfileInstagram(e.target.value)}
                          required
                        />
                        <label className="placeholder">Instagram</label>
                      </div>
                      <input
                        type="color"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        className="profile__color-picker"
                      />
                    </div>
                    <div className="profile__form-wrapper--bottom">
                      <div className="profile__input-group">
                        <textarea
                          name="bio"
                          id="bio"
                          cols="30"
                          rows="10"
                          value={profileBio}
                          onChange={(e) => setProfileBio(e.target.value)}
                          maxLength={300}
                          required
                        ></textarea>
                        <label className="placeholder">Bio</label>
                        <p className="profile__bio-counter">
                          <span>
                            {profileBio.length > 0
                              ? 300 - profileBio.length
                              : 300}
                          </span>{" "}
                          Characters Remaining
                        </p>
                      </div>
                      <select
                        multiple
                        onChange={handleChange}
                        className={
                          selectedSkills.length > 0
                            ? "profile__bio-dropdown--selected"
                            : "profile__bio-dropdown"
                        }
                      >
                        {skills.map((skill) => (
                          <option
                            key={skill}
                            value={skill}
                            className="profile__bio-dropdown-option"
                          >
                            {skill}
                          </option>
                        ))}
                      </select>
                      <div className="profile__bio-projects">
                        <div
                          className={
                            projectPicture
                              ? "profile__file--upload profile__bio-projects__button profile__bio-projects__button--valid"
                              : "profile__file--upload profile__bio-projects__button profile__bio-projects__button--invalid"
                          }
                        >
                          <input
                            type="file"
                            id="profile-project"
                            name="profile-project"
                            placeholder="Project Picture"
                            className="profile__picture-input"
                            onChange={handleProjectPicUpload}
                          />
                          <label
                            htmlFor="profile-project"
                            className="profile__picture-label"
                          >
                            Project Picture
                          </label>
                        </div>
                        <div className="profile__input-group">
                          <input
                            type="text"
                            className="projectName"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            required
                          />
                          <label className="placeholder">Project Name</label>
                        </div>
                        <div className="profile__input-group">
                          <input
                            type="text"
                            className="projectGithubLink"
                            value={projectGithubLink}
                            onChange={(e) =>
                              setProjectGithubLink(e.target.value)
                            }
                            required
                          />
                          <label className="placeholder">Github Link</label>
                        </div>
                        <div className="profile__input-group">
                          <input
                            type="text"
                            className="projectLiveLink"
                            value={projectLiveLink}
                            onChange={(e) => setProjectLiveLink(e.target.value)}
                            required
                          />
                          <label className="placeholder">Site Link</label>
                        </div>
                      </div>
                      <button className="profile__form-submit__button">
                        Save Profile
                      </button>
                    </div>
                  </form>
                </div>
                <div className="profile--right">
                  <div className="profile__preview-banner__container">
                    {profileBanner ? (
                      <img
                        src={profileBanner}
                        alt="banner"
                        className="profile__preview-banner"
                        style={{ borderColor: color, borderWidth: "3px" }}
                      />
                    ) : (
                      ""
                    )}

                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="profile"
                        className="profile__preview-picture"
                        style={{ borderColor: color, borderWidth: "3px" }}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="profile__preview-info">
                    <h1 className="profile__preview-info__name">
                      {profileName}
                    </h1>
                    <h2 className="profile__preview-info__job-title">
                      {profileJobTitle}
                    </h2>
                    <div className="profile__preview-info__content">
                      <h3 className="profile__preview-info__company">
                        {profileCompany}
                      </h3>
                      {profileCompany && profileLocation ? (
                        <span className="profile__preview-info__separator">
                          |
                        </span>
                      ) : (
                        ""
                      )}
                      <h3 className="profile__preview-info__location">
                        {profileLocation}
                      </h3>
                    </div>
                    <div className="profile__preview-info__socials">
                      <a
                        href={`https://www.linkedin.com/in/${profileLinkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="profile__preview-info__socials__linkedin"
                      >
                        {profileLinkedin ? (
                          <img
                            src={linkedIn}
                            alt=""
                            className="profile__preview-info__socials__icon-linkedin"
                          />
                        ) : (
                          ""
                        )}
                      </a>
                      {(profileLinkedin && profileGithub) ||
                      (profileLinkedin && profileInstagram) ? (
                        <span className="profile__preview-info__separator">
                          <BsDot size={25} />
                        </span>
                      ) : (
                        ""
                      )}
                      <a
                        href={`https://www.github.com/${profileGithub}`}
                        target="_blank"
                        rel="noreferrer"
                        className="profile__preview-info__socials__github"
                      >
                        {profileGithub ? (
                          <img
                            src={github}
                            alt=""
                            className="profile__preview-info__socials__icon-github"
                          />
                        ) : (
                          ""
                        )}
                      </a>
                      {profileGithub && profileInstagram ? (
                        <span className="profile__preview-info__separator">
                          <BsDot size={25} />
                        </span>
                      ) : (
                        ""
                      )}
                      <a
                        href={`https://www.instagram.com/${profileInstagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="profile__preview-info__socials__instagram"
                      >
                        {profileInstagram ? (
                          <img
                            src={instagram}
                            alt=""
                            className="profile__preview-info__socials__icon-instagram"
                          />
                        ) : (
                          ""
                        )}
                      </a>
                    </div>
                    {profileBio ? (
                      <div className="profile__preview-info__container">
                        <div className="profile__preview-info__container--left">
                          <h1 className="profile__preview-info__bio-title">
                            About me
                          </h1>
                          <p className="profile__preview-info__bio">
                            {profileBio}
                          </p>
                        </div>
                        {selectedSkills.length > 0 ? (
                          <div className="profile__preview-info__container--right">
                            <h1 className="profile__preview-info__container--right__skill-title">
                              Skills
                            </h1>
                            <div className="profile__preview-info__container--right__skill">
                              {selectedSkills.map((skill) => {
                                if (skill === "CSS") {
                                  return (
                                    <a
                                      href="https://css-tricks.com/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <DiCss3 size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                                if (skill === "HTML") {
                                  return (
                                    <a
                                      href="https://html.com/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <DiHtml5 size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                                if (skill === "JavaScript") {
                                  return (
                                    <a
                                      href="https://www.javascript.com/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <IoLogoJavascript size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                                if (skill === "React") {
                                  return (
                                    <a
                                      href="https://reactjs.org/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <FaReact size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                                if (skill === "Node") {
                                  return (
                                    <a
                                      href="https://nodejs.org/en/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <GrNode size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                                if (skill === "MongoDB") {
                                  return (
                                    <a
                                      href="https://www.mongodb.com/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <SiMongodb size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                                if (skill === "Express") {
                                  return (
                                    <a
                                      href="https://expressjs.com/"
                                      target="_blank"
                                      rel="noreferrer"
                                      key={skill}
                                    >
                                      <p className="profile__preview-info__container--right__skill__text">
                                        <SiExpress size={50} />
                                      </p>
                                    </a>
                                  );
                                }
                              })}
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {projectPicture ? (
                    <div className="profile__project__preview-wrapper">
                      <h1 className="profile__project__preview-title">
                        Projects
                      </h1>
                      <div className="profile__project__preview-container">
                        <div className="profile__project__preview-box">
                          <img
                            src={projectPicture}
                            alt="project"
                            className="profile__project__preview-image"
                          />
                          {projectName && (
                            <div className="profile__project__preview-name">
                              <h3>{projectName}</h3>
                              {projectGithubLink && (
                                <div className="profile__project__preview-link__container">
                                  <a
                                    href={projectGithubLink}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <BsGithub size={40} />
                                  </a>
                                  {projectLiveLink && (
                                    <a
                                      href={projectLiveLink}
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      <IoLogoChrome size={40} />
                                    </a>
                                  )}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {profileResume && projectPicture ? (
                    <a
                      href={profileResumeUrl}
                      download
                      className="profile__resume__download-link"
                    >
                      Download Resume
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </section>
            );
          } else {
            <h1>NOT THE SAME</h1>;
          }
        })}
    </>
  );
};

export default Profile;
