/* < ------------ SCSS IMPORTS ------------> */
import "./App.scss";
/* < ------------ REACT IMPORTS ------------> */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
/* < ------------ COMPONENT IMPORTS ------------> */
import HomePage from "./Pages/HomePage/HomePage";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";
import Team from "./Pages/Team/Team";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import axios from "axios";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import User from "./Pages/User/User";

const App = () => {
  // Stripe
  const PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
  const stripeTestPromise = loadStripe(PUBLISHABLE_KEY);

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);



  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8080/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.status === 200) return res.json();
          throw new Error("failed to authenticate user");
        })
        .then((resJson) => {
          setUser(resJson.user);
        })
        .catch((error) => {
          console.log(`::: There was an error: ${error} :::`);
        });
    };
    getUser();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/users", {
          withCredentials: true,
        });
        setUserData(data);
      } catch (error) {
        console.log("::: There was an error: ", error);
      }
    };
    getUserData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Header key={1} user={user} userData={userData} />,
              <HomePage key={2} user={user} />,
              <Footer key={3} user={user} />,
            ]}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/me/:id"
            element={<Profile user={user} userData={userData} />}
          />
          <Route
            path="/team"
            element={[
              <Header key={1} user={user} userData={userData} />,
              <Team key={2} />,
              <Footer key={3} user={user} />,
            ]}
          />
          <Route
            path="/pricing"
            element={[
              <Header key={1} user={user} userData={userData} />,
              <Elements stripe={stripeTestPromise}>
                <Pricing key={2} user={user} />
              </Elements>,
              <Footer key={3} user={user} />,
            ]}
          />
          <Route
            path="/contact"
            element={[
              <Header key={1} user={user} userData={userData} />,
              <Contact key={2} />,
              <Footer key={3} user={user} />,
            ]}
          />
          <Route path="/mahdi" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
