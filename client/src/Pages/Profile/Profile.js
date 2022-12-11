import "./Profile.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile = ({ user, userData }) => {
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
                    <input
                      type="text"
                      className="fullName"
                      placeholder="Full Name"
                      value={profileName}
                      onChange={(e) => setProfileName(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="jobTitle"
                      placeholder="Job Title"
                      value={profileJobTitle}
                      onChange={(e) => setProfileJobTitle(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="company"
                      placeholder="Company"
                      value={profileCompany}
                      onChange={(e) => setProfileCompany(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="location"
                      placeholder="Location"
                      value={profileLocation}
                      onChange={(e) => setProfileLocation(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="linkedin"
                      placeholder="linkedin.com/in/"
                      value={profileLinkedin}
                      onChange={(e) => setProfileLinkedin(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="github"
                      placeholder="github.com/"
                      value={profileGithub}
                      onChange={(e) => setProfileGithub(e.target.value)}
                      required
                    />
                    <input
                      type="text"
                      className="instagram"
                      placeholder="instagram.com/"
                      value={profileInstagram}
                      onChange={(e) => setProfileInstagram(e.target.value)}
                      required
                    />
                    <textarea
                      name="bio"
                      id="bio"
                      cols="30"
                      rows="10"
                      placeholder="Bio"
                      value={profileBio}
                      onChange={(e) => setProfileBio(e.target.value)}
                      required
                    ></textarea>
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
                    <h3 className="profile__preview-info__company">
                      {profileCompany}
                    </h3>
                    <h3 className="profile__preview-info__location">
                      {profileLocation}
                    </h3>
                    <div className="profile__preview-info__socials">
                      <a
                        href={`https://www.linkedin.com/in/${profileLinkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="profile__preview-info__socials__linkedin"
                      ></a>
                      <a
                        href={`https://www.github.com/${profileGithub}`}
                        target="_blank"
                        rel="noreferrer"
                        className="profile__preview-info__socials__github"
                      ></a>
                      <a
                        href={`https://www.instagram.com/${profileInstagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="profile__preview-info__socials__instagram"
                      ></a>
                    </div>
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
