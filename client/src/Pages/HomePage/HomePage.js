/* < ------------ SCSS IMPORTS ------------> */
import "./HomePage.scss";
/* < ------------ ASSET IMPORTS ------------> */
import img from "../../assets/illustrations/iPhone 14 Pro Mockup.svg";
import illustration_one from "../../assets/illustrations/illustration_one.svg";
import illustration_two from "../../assets/illustrations/illustration_two.svg";
import illustration_three from "../../assets/illustrations/illustration_three.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaCrown } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section className="home">
        <div className="home__wrapper">
          <div className="home__wrapper--left">
            <h3 className="home__subtitle">
              <FaCrown /> Make a connection today.
            </h3>
            <h1 className="home__title">
              Network Like a <span>Pro</span>
              <BsCircleFill size={7} />
            </h1>
            <p className="home__description"></p>
            <div className="home__feature-container">
              <div className="home__feature-wrapper">
                <AiFillCheckCircle
                  className="home__check-icon"
                  color="white"
                  size={18}
                />
                <p className="home__feature">Connect Instantly</p>
              </div>
              <div className="home__feature-wrapper">
                <AiFillCheckCircle
                  className="home__check-icon"
                  color="white"
                  size={18}
                />
                <p className="home__feature">Drive More Leads</p>
              </div>
              <div className="home__feature-wrapper">
                <AiFillCheckCircle
                  className="home__check-icon"
                  color="white"
                  size={18}
                />
                <p className="home__feature">Reach More People</p>
              </div>
            </div>
            <div className="home__illustrations">
              <div className="home__illustrations-card"></div>
            </div>
            <Link to={"/login"}>
              <button className="home__button">Get Started Now</button>
            </Link>
          </div>

          <img src={img} alt="iphone image" className="home__img" />
        </div>
      </section>
      <section className="main">
        <h1 className="main__title">
          Who are <span>we</span>?
        </h1>
        <div className="main__content-container">
          <div className="main__content-card">
            <img
              src={illustration_three}
              alt="illustration"
              className="main__content-img"
            />
            <div className="main__content-card__info main__content-card__info--first">
              <h1 className="main__content-card__header">
                All you need to become a pro <span>networker</span>!
              </h1>
              <p className="main__content-card__description">
                Keegly is an all-in-one solution that allows you to build a
                digital portfolio for yourself which you can then share with
                recruiters and other people.
              </p>
              <button className="main__content-card__button">Explore</button>
            </div>
          </div>
          <div className="main__content-card">
            <div className="main__content-card__info main__content-card__info--second">
              <h1 className="main__content-card__header">
                Stand out <span>among</span> the crowd.
              </h1>
              <p className="main__content-card__description">
                Keegly allows for a more modern way of networking by providing
                the option to connect your profile to cards, bracelets,
                stickers, or rings. You can then simply tap away!
              </p>
              <button className="main__content-card__button">Explore</button>
            </div>
            <img
              src={illustration_one}
              alt="illustration"
              className="main__content-img"
            />
          </div>
          <div className="main__content-card">
            <img
              src={illustration_two}
              alt="illustration"
              className="main__content-img"
            />
            <div className="main__content-card__info main__content-card__info--third">
              <h1 className="main__content-card__header">
                Tap Tap <span>Tap</span>!
              </h1>
              <p className="main__content-card__description">
                Keegly works straight out of the box with no installation
                required by taking advantage of already existing NFC technology
                in smartphones. Simply tap your card to the back of phones and
                your profile can be shared with others!
              </p>
              <button className="main__content-card__button">Explore</button>
            </div>
          </div>
        </div>
      </section>
      <section className="feature">
        <div className="feature--top">
          <div className="feature__title">
            Why Choose <span>Keegly</span>?
          </div>
          <p className="feature__main__description">
            Keegly's features were tailor-made to help you meet more people in
            less time.
          </p>
          <button className="feature__button">Explore</button>
        </div>

        <div className="feature__container">
          <div className="feature__card">
            <div className="feature__icon">
              <CiCircleCheck size={35} />
            </div>
            <h1 className="feature__header">
              Free, <span>Forever</span>
            </h1>
            <p className="feature__description">
              Keegly will always have a free plan where you're able to make an
              online portfolio for yourself.
            </p>
          </div>
          <div className="feature__card">
            <div className="feature__icon">
              <CiCircleCheck size={35} />
            </div>
            <h1 className="feature__header">
              <span>Compatible</span>
            </h1>
            <p className="feature__description">
              Keegly is compatible with all modern phones with no installation
              needed! Simply unbox is and happy tapping!
            </p>
          </div>
          <div className="feature__card">
            <div className="feature__icon">
              <CiCircleCheck size={35} />
            </div>
            <h1 className="feature__header">
              <span>Unlimited</span> Sharing
            </h1>
            <p className="feature__description">
              You can share your profile with as many people as you want with no
              limits!
            </p>
          </div>
          <div className="feature__card">
            <div className="feature__icon">
              <CiCircleCheck size={35} />
            </div>
            <h1 className="feature__header">
              <span>Convenient</span>
            </h1>
            <p className="feature__description">
              You no longer have to carry around bulky bags for your resume!
              Simply tap and go.
            </p>
          </div>
        </div>
      </section>
      <section className="join">
        <h1 className="join__title">
          Join our email <span>list</span> today.
        </h1>
        <form action="" className="join__form">
          <input
            type="text"
            className="join__input"
            placeholder="Your Email..."
          />
          <button className="join__button">Join</button>
        </form>
      </section>
    </>
  );
};

export default HomePage;
