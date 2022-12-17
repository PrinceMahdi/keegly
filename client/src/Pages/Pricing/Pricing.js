/* --------------- SCSS IMPORTS --------------- */
import "./Pricing.scss";
/* --------------- ASSET IMPORTS --------------- */
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
/* --------------- REACT IMPORTS --------------- */
import { Link } from "react-router-dom";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const Pricing = ({ user }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripeTestPromise = loadStripe(PUBLISHABLE_KEY);

  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async () => {
    const response = await axios.post(
      "http://localhost:8080/create-checkout-session",
      {
        items: [{ id: 1, quantity: 1 }],
      }
    );
    const { id } = response.data;
    const stripe = await stripeTestPromise;
    const { error } = await stripe.redirectToCheckout({ sessionId: id });
    if (error) {
      console.log(error);
    }
    if (user) {
      window.location.replace(
        "https://checkout.stripe.com/c/pay/cs_test_a13wbIhM4h6WYhuMcecrsXYnhsB2zm3MVVqi8SUWWvnlL4qxvb7PGTqC2w#fidkdWxOYHwnPyd1blpxYHZxWjA0QXVdYmhCNGAycjJLXGhvMFNgYmEwaE4yXUtMf05cSGFxfUNsPFJ8TXQ3NzNHcEhKQElQYUJJVjB8c3ZCb1dBcUN8YHd3NG1UdWdgTmI9SVxONzNtT1JfNTVUb0hdf3VuTScpJ2hsYXYnP34nYnBsYSc%2FJzY3Z2dhYDwyKDI8MjcoMWQyMyhnMmE9KDE8NmBhNTBnPWBkNT1gYWA0MCcpJ2hwbGEnPyc2YzUwYWEzNChnNzE2KDExPGcoPGcyPShhNmNgYGQ0ZD03MGNjNGExYDInKSd2bGEnPydkYDNnYWcxZyg9PGc3KDE8MDUoZGYwYCg1YDxmMGFnPT1gNj08ZDJmMmcneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FNjU1NSd4JSUl"
      );
    } else {
      window.location.replace("/login");
    }
  };

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

            <Link>
              <button
                className="pricing__card-button pricing__card-button--second"
                onClick={handleCheckout}
              >
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
