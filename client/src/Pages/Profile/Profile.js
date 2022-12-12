import "./Profile.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import linkedIn from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import github from "../../assets/icons/github.svg";
import Multiselect from "multiselect-react-dropdown";

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
  const [selectedSkills, setSelectedSkills] = useState([]);

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

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    //...
  ];

  const handleChange = (event) => {
    // Get the selected options from the event
    const options = event.target.options;

    // Create an array of the selected skills
    const selectedOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedOptions.push(options[i].value);
      }
    }

    // Update the state with the selected skills
    setSelectedSkills(selectedOptions);
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
                  <form action="" className="profile__form">
                    <div className="profile__banner__file--upload">
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
                    <div className="profile__file--upload">
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
                        {profileBio.length > 0 ? 300 - profileBio.length : 300}{" "}
                        Characters Remaining
                      </p>
                    </div>
                    <select multiple onChange={handleChange}>
                      {skills.map((skill) => (
                        <option key={skill} value={skill}>
                          {skill}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="profile--right">
                  <div className="profile__preview-banner__container">
                    {profileBanner ? (
                      <img
                        src={profileBanner}
                        alt="banner picture"
                        className="profile__preview-banner"
                      />
                    ) : (
                      ""
                    )}

                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="profile picture"
                        className="profile__preview-picture"
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
                            {selectedSkills.map((skill) => {
                              return (
                                <div className="profile__preview-info__container--right__skill">
                                  <div className="profile__preview-info__container--right__skill__container">
                                    <p className="profile__preview-info__container--right__skill__text">
                                      {skill}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
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
