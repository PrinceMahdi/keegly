/* --------------- REACT IMPORTS --------------- */
import { Link } from "react-router-dom";
/* --------------- SCSS IMPORTS --------------- */
import "./Login.scss";
/* --------------- ASSET IMPORTS --------------- */
import loginImg from "../../assets/illustrations/Travels.svg";

const Login = () => {
  const google = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  return (
    <>
      <section className="login">
        <div className="login--left">
          <h1 className="login__title">Login</h1>
          <h3 className="login__subtitle">Please enter your details.</h3>
          <button className="login__button-google" onClick={google}>
            Login with Google
          </button>
          <div className="login__divider">
            <div className="login__divider__line"></div>
            <div className="login__divider__or">or</div>
            <div className="login__divider__line"></div>
          </div>
          <form className="login__form">
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
            <div className="login__form-content">
              <div className="login__form-content--left">
                <input
                  id="remember"
                  type="checkbox"
                  className="login__checkbox"
                />
                <label htmlFor="remember" className="login__label">
                  Remember me for 30 days
                </label>
              </div>
              <Link to={"/login"} className="login__forgot">
                Forgot Password
              </Link>
            </div>
            <button className="login__button">Login</button>
          </form>
          <p className="login--bottom">
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <span className="login__signup-link">Sign up for free</span>
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

export default Login;
