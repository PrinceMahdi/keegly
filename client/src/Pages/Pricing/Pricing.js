/* --------------- SCSS IMPORTS --------------- */
import "./Pricing.scss";
/* --------------- ASSET IMPORTS --------------- */
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
/* --------------- REACT IMPORTS --------------- */
import { Link } from "react-router-dom";

const Pricing = ({ user }) => {
  return (
    <>
      <section className="pricing">
        <h1 className="pricing__title">
          Choose the <span>perfect</span> plan
        </h1>
        <div className="pricing__cards">
          <div className="pricing__card">
            <h3 className="pricing__card-title">Free</h3>
            <h2 className="pricing__card-price">$0</h2>
            <ul className="pricing__card-perks">
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Unlimited sharing</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCloseCircle size={22} />
                <li className="pricing__card-perk">Multiple profiles</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCloseCircle size={22} />
                <li className="pricing__card-perk">Fast customer service</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCloseCircle size={22} />
                <li className="pricing__card-perk">Unlimited upload</li>
              </div>
            </ul>
            <Link to={user ? "/profile" : "/login"}>
              <button className="pricing__card-button">Get Started</button>
            </Link>
          </div>
          <div className="pricing__card">
            <span className="pricing__card-popular">Most Popular</span>
            <h3 className="pricing__card-title pricing__card-title--second">
              Keegly Card
            </h3>
            <h2 className="pricing__card-price pricing__card-price--second">
              $24.99
            </h2>
            <ul className="pricing__card-perks">
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Unlimited sharing</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Multiple profiles</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Fast customer service</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Unlimited upload</li>
              </div>
            </ul>
            <Link to={user ? "/profile" : "/login"}>
              <button className="pricing__card-button pricing__card-button--second">
                Get Started
              </button>
            </Link>
          </div>
          <div className="pricing__card">
            <h3 className="pricing__card-title">Keegly Bracelet</h3>
            <h2 className="pricing__card-price">$34.99</h2>
            <ul className="pricing__card-perks">
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Unlimited sharing</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Multiple profiles</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Fast customer service</li>
              </div>
              <div className="pricing__card__perk-container">
                <AiFillCheckCircle size={22} />
                <li className="pricing__card-perk">Unlimited upload</li>
              </div>
            </ul>
            <Link to={user ? "/profile" : "/login"}>
              <button className="pricing__card-button">Get Started</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
