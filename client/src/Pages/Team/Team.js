/* --------------- SCSS IMPORTS --------------- */
import "./Team.scss";
/* --------------- ASSET IMPORTS --------------- */
import Mahdi from "../../assets/team/Screen Shot 2022-10-24 at 1.41.10 PM copy.png";

const Team = () => {
  return (
    <>
      <section className="team">
        <h1 className="team__title">
          Meet our <span>team</span>
        </h1>
        <div className="team__wrapper">
          <div className="team__member-card">
            <img src={Mahdi} alt="person" className="team__member-img" />
            <h2 className="team__member-title">Mahdi Shirmohammadi</h2>
            <h3 className="team__member-role">CEO & Founder</h3>
            <p className="team__member-bio">
              Mahdi loves learning and spends most of his day coding full-stack
              applications. He is very passionate about what he does and when he
              isn't coding, he spends time gardening, learning languages, and
              playing the piano! Prior to founding Keegly, Mahdi was a Marketing
              Manager.
            </p>
            <div className="team__member-socials">
              <a
                href="https://github.com/PrinceMahdi"
                className="team__member-link"
                target="_blank"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mahdishirmohammadi/"
                className="team__member-link"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/elonmusk"
                className="team__member-link"
                target="_blank"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
