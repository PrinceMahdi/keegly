/* --------------- REACT IMPORTS --------------- */
import { Link } from "react-router-dom";
/* --------------- SCSS IMPORTS --------------- */
import "./SignUp.scss";
/* --------------- ASSET IMPORTS --------------- */
import loginImg from "../../assets/illustrations//illustration_one.svg";

const SignUp = () => {
  return (
    <>
      <section className="login">
        <div className="login--left">
          <h1 className="login__title">Sign Up</h1>
          <h3 className="login__subtitle">Please enter your details.</h3>
          <form className="login__form">
            <input
              id="name"
              type="text"
              className="login__input"
              placeholder="Full Name"
            />
            <input
              id="email"
              type="text"
              className="login__input"
              placeholder="Email"
            />
            <input
              type="password"
              className="login__input"
              placeholder="Password"
            />
            <input
              type="password"
              className="login__input"
              placeholder="Confirm Password"
            />
            <button className="login__button">Sign Up</button>
          </form>
          <p className="login--bottom">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className="login__signup-link">Login</span>
            </Link>
          </p>
        </div>
        <div className="login--right">
          <img src={loginImg} alt="login page" className="login__img" />
        </div>
      </section>
    </>
  );
};

export default SignUp;
