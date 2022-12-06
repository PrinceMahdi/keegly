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

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={[
              <Header key={1} />,
              <HomePage key={2} />,
              <Footer key={3} />,
            ]}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/team"
            element={[<Header key={1} />, <Team key={2} />, <Footer key={3} />]}
          />
          <Route
            path="/pricing"
            element={[
              <Header key={1} />,
              <Pricing key={2} />,
              <Footer key={3} />,
            ]}
          />
          <Route
            path="/contact"
            element={[
              <Header key={1} />,
              <Contact key={2} />,
              <Footer key={3} />,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
